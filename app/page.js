import { BookOpen, Brain, Code, Database, GitBranch, Rocket, Users, Calendar, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Header/Navigation */}
      <header style={{
        backgroundColor: 'var(--fau-blue)',
        color: 'var(--white)',
        padding: 'var(--space-2) 0'
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
            <a href="#about" style={{ color: 'var(--white)' }}>About</a>
            <Link href="/syllabus" style={{ color: 'var(--white)' }}>Syllabus</Link>
            <Link href="/ask-me" style={{ color: 'var(--white)' }}>Ask Me</Link>
            <a href="#contact" style={{ color: 'var(--white)' }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        backgroundColor: 'var(--white)',
        padding: 'var(--space-8) 0',
        borderBottom: '1px solid var(--border-light)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h1 style={{ 
              color: 'var(--fau-red)', 
              marginBottom: 'var(--space-1)',
              fontSize: 'clamp(2rem, 5vw, 2.5rem)'
            }}>
              DR. LEE
            </h1>
            <p style={{ 
              color: 'var(--fau-dark-gray)', 
              fontSize: 'var(--fs-h4)',
              marginBottom: 'var(--space-2)'
            }}>
              Instructor
            </p>
            <h2 style={{ 
              color: 'var(--fau-red)', 
              fontSize: 'var(--fs-h3)',
              fontWeight: 'var(--fw-heavy)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: 'var(--space-3)'
            }}>
              INFORMATION TECHNOLOGY AND OPERATIONS MANAGEMENT
            </h2>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: 'var(--space-1)',
              marginBottom: 'var(--space-4)'
            }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                <MapPin size={18} style={{ color: 'var(--fau-electric-blue)' }} />
                <span>Office: Liberal Arts Building - Room 467 (Davie)</span>
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                <Mail size={18} style={{ color: 'var(--fau-electric-blue)' }} />
                <span>Email: <a href="mailto:lee@fau.edu">lee@fau.edu</a></span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section id="about" style={{
        backgroundColor: 'var(--fau-sky-blue)',
        padding: 'var(--space-8) 0'
      }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
            Machine Learning Operations (MLOps)
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-4)',
            marginBottom: 'var(--space-6)'
          }}>
            <div className="card">
              <Brain size={32} style={{ color: 'var(--fau-electric-blue)', marginBottom: 'var(--space-2)' }} />
              <h3 style={{ fontSize: 'var(--fs-h4)', color: 'var(--fau-blue)' }}>ML Fundamentals</h3>
              <p style={{ marginBottom: 0 }}>
                Build a strong foundation in machine learning principles, model development, and evaluation techniques.
              </p>
            </div>

            <div className="card">
              <Rocket size={32} style={{ color: 'var(--fau-electric-blue)', marginBottom: 'var(--space-2)' }} />
              <h3 style={{ fontSize: 'var(--fs-h4)', color: 'var(--fau-blue)' }}>Deployment</h3>
              <p style={{ marginBottom: 0 }}>
                Learn to deploy ML models to production environments using modern cloud platforms and containerization.
              </p>
            </div>

            <div className="card">
              <GitBranch size={32} style={{ color: 'var(--fau-electric-blue)', marginBottom: 'var(--space-2)' }} />
              <h3 style={{ fontSize: 'var(--fs-h4)', color: 'var(--fau-blue)' }}>CI/CD Pipelines</h3>
              <p style={{ marginBottom: 0 }}>
                Master continuous integration and deployment for ML workflows with automated testing and monitoring.
              </p>
            </div>
          </div>

          <div style={{ 
            backgroundColor: 'var(--white)',
            padding: 'var(--space-4)',
            borderRadius: 'var(--border-radius-md)',
            borderLeft: '4px solid var(--fau-red)'
          }}>
            <h3>Course Description</h3>
            <p style={{ marginBottom: 0 }}>
              This comprehensive course bridges the gap between machine learning development and production deployment. 
              Students will learn industry best practices for building, deploying, and maintaining ML systems at scale. 
              Topics include model versioning, automated training pipelines, monitoring, A/B testing, and MLOps tools 
              like MLflow, Kubeflow, and cloud ML platforms. By the end of this course, you'll be equipped to implement 
              end-to-end ML solutions in enterprise environments.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section id="syllabus" style={{
        backgroundColor: 'var(--white)',
        padding: 'var(--space-8) 0'
      }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
            What You'll Learn
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-4)'
          }}>
            <div style={{ 
              display: 'flex', 
              gap: 'var(--space-2)',
              alignItems: 'flex-start'
            }}>
              <Code size={24} style={{ color: 'var(--fau-electric-blue)', flexShrink: 0, marginTop: '4px' }} />
              <div>
                <h4>Model Development & Versioning</h4>
                <p style={{ marginBottom: 0 }}>
                  Create reproducible ML experiments with proper version control and experiment tracking.
                </p>
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              gap: 'var(--space-2)',
              alignItems: 'flex-start'
            }}>
              <Database size={24} style={{ color: 'var(--fau-electric-blue)', flexShrink: 0, marginTop: '4px' }} />
              <div>
                <h4>Data Pipeline Engineering</h4>
                <p style={{ marginBottom: 0 }}>
                  Build robust data pipelines for training and inference with data validation and monitoring.
                </p>
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              gap: 'var(--space-2)',
              alignItems: 'flex-start'
            }}>
              <Rocket size={24} style={{ color: 'var(--fau-electric-blue)', flexShrink: 0, marginTop: '4px' }} />
              <div>
                <h4>Production Deployment</h4>
                <p style={{ marginBottom: 0 }}>
                  Deploy models using containers, APIs, and cloud services with proper scaling and monitoring.
                </p>
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              gap: 'var(--space-2)',
              alignItems: 'flex-start'
            }}>
              <GitBranch size={24} style={{ color: 'var(--fau-electric-blue)', flexShrink: 0, marginTop: '4px' }} />
              <div>
                <h4>Automated Workflows</h4>
                <p style={{ marginBottom: 0 }}>
                  Implement CI/CD pipelines for automated model training, testing, and deployment.
                </p>
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              gap: 'var(--space-2)',
              alignItems: 'flex-start'
            }}>
              <Users size={24} style={{ color: 'var(--fau-electric-blue)', flexShrink: 0, marginTop: '4px' }} />
              <div>
                <h4>Team Collaboration</h4>
                <p style={{ marginBottom: 0 }}>
                  Work effectively in cross-functional teams using MLOps best practices and tools.
                </p>
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              gap: 'var(--space-2)',
              alignItems: 'flex-start'
            }}>
              <BookOpen size={24} style={{ color: 'var(--fau-electric-blue)', flexShrink: 0, marginTop: '4px' }} />
              <div>
                <h4>Industry Tools & Practices</h4>
                <p style={{ marginBottom: 0 }}>
                  Gain hands-on experience with MLflow, Kubeflow, Docker, Kubernetes, and cloud ML platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Information */}
      <section style={{
        backgroundColor: 'var(--fau-sky-blue)',
        padding: 'var(--space-8) 0'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-4)'
          }}>
            <div className="card">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                <Calendar size={24} style={{ color: 'var(--fau-electric-blue)' }} />
                Schedule
              </h3>
              <p><strong>Fall 2025</strong></p>
              <p>Mondays & Wednesdays</p>
              <p style={{ marginBottom: 0 }}>3:00 PM - 4:15 PM</p>
            </div>

            <div className="card">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                <BookOpen size={24} style={{ color: 'var(--fau-electric-blue)' }} />
                Prerequisites
              </h3>
              <p>• Python Programming</p>
              <p>• Data Structures & Algorithms</p>
              <p style={{ marginBottom: 0 }}>• Basic Machine Learning</p>
            </div>

            <div className="card">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                <Users size={24} style={{ color: 'var(--fau-electric-blue)' }} />
                Format
              </h3>
              <p>• Hands-on Labs</p>
              <p>• Real-world Projects</p>
              <p style={{ marginBottom: 0 }}>• Industry Case Studies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" style={{
        backgroundColor: 'var(--fau-blue)',
        color: 'var(--white)',
        padding: 'var(--space-8) 0',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ color: 'var(--white)', marginBottom: 'var(--space-3)' }}>
            Ready to Master MLOps?
          </h2>
          <p style={{ fontSize: 'var(--fs-h4)', marginBottom: 'var(--space-4)', opacity: 0.95 }}>
            Join us for an exciting journey into the world of Machine Learning Operations
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-2)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:lee@fau.edu" className="btn btn-primary">
              Contact Dr. Lee
            </a>
            <Link href="/syllabus" className="btn btn-secondary">
              View Syllabus
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: 'var(--fau-dark-gray)',
        color: 'var(--white)',
        padding: 'var(--space-4) 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <p style={{ marginBottom: 'var(--space-1)', opacity: 0.9 }}>
            Florida Atlantic University - College of Business
          </p>
          <p style={{ marginBottom: 0, fontSize: 'var(--fs-small)', opacity: 0.7 }}>
            777 Glades Road, Boca Raton, FL 33431
          </p>
        </div>
      </footer>
    </main>
  )
}
