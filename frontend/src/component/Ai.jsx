import React, { useContext, useState, useEffect, useRef } from 'react'
import ai from "../assets/ai.png"
import open from "../assets/open.mp3"
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Ai() {
  const { showSearch, setShowSearch } = useContext(shopDataContext)
  const navigate = useNavigate()
  const [activeAi, setActiveAi] = useState(false)
  const [recognition, setRecognition] = useState(null)
  const [isListening, setIsListening] = useState(false)
  const openingSoundRef = useRef(null)

  useEffect(() => {
    openingSoundRef.current = new Audio(open)
    openingSoundRef.current.volume = 0.3
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      
      if (SpeechRecognition) {
        const recognitionInstance = new SpeechRecognition()
        recognitionInstance.continuous = false
        recognitionInstance.interimResults = false
        recognitionInstance.lang = 'en-US'

        recognitionInstance.onstart = () => {
          setIsListening(true)
        }

        recognitionInstance.onresult = (event) => {
          const transcript = event.results[0][0].transcript.toLowerCase().trim()
          
          if (transcript.includes('home')) {
            speak('Opening home page')
            navigate('/')
          } else if (transcript.includes('collection') || transcript.includes('shop')) {
            speak('Opening collections')
            navigate('/collection')
          } else if (transcript.includes('cart')) {
            speak('Opening cart')
            navigate('/cart')
          } else if (transcript.includes('about')) {
            speak('Opening about page')
            navigate('/about')
          } else if (transcript.includes('contact')) {
            speak('Opening contact page')
            navigate('/contact')
          } else if (transcript.includes('order')) {
            speak('Opening orders')
            navigate('/order')
          } else if (transcript.includes('login')) {
            speak('Opening login page')
            navigate('/login')
          } else if (transcript.includes('search')) {
            speak('Opening search')
            setShowSearch(true)
            navigate('/collection')
          } else if (transcript.includes('stop') || transcript.includes('close')) {
            speak('Stopping assistant')
            setActiveAi(false)
            setIsListening(false)
          } else {
            speak('Command not recognized. Try saying home, shop, cart, about, contact, orders, or stop')
          }

          if (activeAi && !transcript.includes('stop') && !transcript.includes('close')) {
            setTimeout(() => {
              if (activeAi) {
                startListening()
              }
            }, 2000)
          }
        }

        recognitionInstance.onend = () => {
          setIsListening(false)
          if (activeAi) {
            setTimeout(() => {
              if (activeAi) {
                startListening()
              }
            }, 1000)
          }
        }

        recognitionInstance.onerror = (event) => {
          setIsListening(false)
          if (event.error === 'not-allowed') {
            toast.error('Microphone access denied')
            setActiveAi(false)
          } else if (event.error === 'no-speech') {
            if (activeAi) {
              setTimeout(() => {
                if (activeAi) {
                  startListening()
                }
              }, 1000)
            }
          }
        }

        setRecognition(recognitionInstance)
      }
    }
  }, [activeAi, navigate, setShowSearch])

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.8
      utterance.pitch = 1
      utterance.volume = 0.7
      window.speechSynthesis.speak(utterance)
    }
  }

  const startListening = () => {
    if (recognition && !isListening) {
      try {
        recognition.start()
      } catch (error) {
        console.error('Recognition start error:', error)
      }
    }
  }

  const handleToggle = async () => {
    if (!recognition) {
      toast.error('Voice recognition not supported')
      return
    }

    if (activeAi) {
      setActiveAi(false)
      setIsListening(false)
      recognition.stop()
      speak('Voice assistant stopped')
      toast.info('Voice assistant deactivated')
    } else {
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true })
        
        if (openingSoundRef.current) {
          openingSoundRef.current.play().catch(() => {})
        }

        setActiveAi(true)
        speak('Voice assistant activated. Say your command')
        toast.success('Voice assistant activated - Speak now!')
        
        setTimeout(() => {
          startListening()
        }, 2000)

      } catch (error) {
        toast.error('Microphone access denied')
      }
    }
  }

  return (
    <div className='fixed bottom-6 left-6 z-50 cursor-pointer group' onClick={handleToggle}>
      <div className='relative'>
        <img 
          src={ai} 
          alt="AI Assistant" 
          className={`w-16 h-16 rounded-full transition-all duration-300 select-none ${
            activeAi 
              ? 'animate-pulse scale-110 shadow-lg shadow-green-500/50' 
              : 'hover:scale-105 shadow-md'
          }`}
        />
        
        {activeAi && (
          <div className='absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping border-2 border-white'></div>
        )}

        {isListening && (
          <div className='absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap animate-bounce'>
            Listening...
          </div>
        )}
      </div>

      <div className='absolute bottom-full left-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
        <div className='bg-black text-white text-xs p-3 rounded-lg shadow-xl whitespace-nowrap'>
          <div className='font-semibold mb-1 text-blue-400'>
            {activeAi ? 'Click to STOP' : 'Click to START'}
          </div>
          <div className='text-blue-300'>
            Say: home, shop, cart, about, contact, orders, search, stop
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ai
