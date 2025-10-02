'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Bot, User, ArrowLeft, Loader2 } from 'lucide-react'
import Link from 'next/link'

export default function AskMe() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I\'m your MLOps teaching assistant. Ask me anything about Machine Learning Operations, course topics, or MLOps tools and best practices!'
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage]
        }),
      })

      const data = await response.json()

      if (data.error) {
        throw new Error(data.error)
      }

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.message
      }])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again or contact Dr. Lee at lee@fau.edu for assistance.'
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header */}
      <header style={{
        backgroundColor: 'var(--fau-blue)',
        color: 'var(--white)',
        padding: 'var(--space-2) 0',
        flexShrink: 0
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ fontWeight: 'var(--fw-heavy)', fontSize: '1.25rem' }}>
            FAU College of Business
          </div>
          <nav style={{ display: 'flex', gap: 'var(--space-4)' }}>
            <Link href="/" style={{ color: 'var(--white)' }}>Home</Link>
            <Link href="/syllabus" style={{ color: 'var(--white)' }}>Syllabus</Link>
            <Link href="/ask-me" style={{ color: 'var(--white)' }}>Ask Me</Link>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container" style={{ padding: 'var(--space-2)', flexShrink: 0 }}>
        <Link href="/" style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: 'var(--space-1)',
          color: 'var(--fau-electric-blue)'
        }}>
          <ArrowLeft size={16} />
          Back to Course Home
        </Link>
      </div>

      {/* Page Title */}
      <div className="container" style={{ padding: '0 var(--space-2) var(--space-3)', flexShrink: 0 }}>
        <h1 style={{ color: 'var(--fau-red)', marginBottom: 'var(--space-1)' }}>
          Ask Me
        </h1>
        <p style={{ color: 'var(--fau-dark-gray)', marginBottom: 0 }}>
          Your AI Teaching Assistant for MLOps
        </p>
      </div>

      {/* Chat Container */}
      <div className="container" style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column',
        paddingBottom: 'var(--space-4)',
        overflow: 'hidden'
      }}>
        <div style={{
          flex: 1,
          backgroundColor: 'var(--white)',
          borderRadius: 'var(--border-radius-md)',
          border: '1px solid var(--border-light)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
        }}>
          {/* Messages Area */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: 'var(--space-4)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-3)'
          }}>
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  gap: 'var(--space-2)',
                  alignItems: 'flex-start',
                  flexDirection: message.role === 'user' ? 'row-reverse' : 'row'
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: message.role === 'user' ? 'var(--fau-electric-blue)' : 'var(--fau-red)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {message.role === 'user' ? (
                    <User size={20} style={{ color: 'var(--white)' }} />
                  ) : (
                    <Bot size={20} style={{ color: 'var(--white)' }} />
                  )}
                </div>
                <div style={{
                  maxWidth: '70%',
                  padding: 'var(--space-2) var(--space-3)',
                  borderRadius: 'var(--border-radius-md)',
                  backgroundColor: message.role === 'user' ? 'var(--fau-sky-blue)' : 'var(--fau-gray)',
                  color: 'var(--fau-dark-gray)',
                  wordBreak: 'break-word'
                }}>
                  <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                    {message.content}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div style={{
                display: 'flex',
                gap: 'var(--space-2)',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--fau-red)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Bot size={20} style={{ color: 'var(--white)' }} />
                </div>
                <div style={{
                  padding: 'var(--space-2) var(--space-3)',
                  borderRadius: 'var(--border-radius-md)',
                  backgroundColor: 'var(--fau-gray)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-1)'
                }}>
                  <Loader2 size={16} style={{ color: 'var(--fau-electric-blue)', animation: 'spin 1s linear infinite' }} />
                  <span style={{ color: 'var(--fau-dark-gray)' }}>Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form 
            onSubmit={handleSubmit}
            style={{
              padding: 'var(--space-3)',
              borderTop: '1px solid var(--border-light)',
              backgroundColor: 'var(--white)'
            }}
          >
            <div style={{
              display: 'flex',
              gap: 'var(--space-2)',
              alignItems: 'center'
            }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about MLOps, course topics, tools..."
                disabled={isLoading}
                style={{
                  flex: 1,
                  padding: 'var(--space-2)',
                  border: '1px solid var(--fau-gray)',
                  borderRadius: 'var(--border-radius-sm)',
                  fontSize: 'var(--fs-body)',
                  fontFamily: 'var(--font-primary)',
                  color: 'var(--text-body)',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--fau-electric-blue)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--fau-gray)'}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                style={{
                  padding: 'var(--space-2)',
                  backgroundColor: 'var(--fau-electric-blue)',
                  color: 'var(--white)',
                  border: 'none',
                  borderRadius: 'var(--border-radius-sm)',
                  cursor: isLoading || !input.trim() ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48px',
                  height: '44px',
                  transition: 'background-color 0.2s ease',
                  opacity: isLoading || !input.trim() ? 0.5 : 1
                }}
                onMouseEnter={(e) => {
                  if (!isLoading && input.trim()) {
                    e.target.style.backgroundColor = 'var(--fau-blue)'
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'var(--fau-electric-blue)'
                }}
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Add keyframe animation for loading spinner */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </main>
  )
}
