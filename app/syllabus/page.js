import { ArrowLeft, Calendar, BookOpen, Target, Award, ClipboardList, Users, Mail } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'MLOps Course Syllabus - Dr. Lee | Florida Atlantic University',
  description: 'Complete syllabus for Machine Learning Operations (MLOps) course at Florida Atlantic University',
}

export default function Syllabus() {
  return (
    <main>
      {/* Header */}
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
            <Link href="/" style={{ color: 'var(--white)' }}>Home</Link>
            <Link href="/syllabus" style={{ color: 'var(--white)' }}>Syllabus</Link>
            <Link href="/ask-me" style={{ color: 'var(--white)' }}>Ask Me</Link>
            <a href="mailto:lee@fau.edu" style={{ color: 'var(--white)' }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container" style={{ padding: 'var(--space-3) var(--space-2)' }}>
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

      {/* Syllabus Header */}
      <section style={{ padding: 'var(--space-6) 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <h1 style={{ color: 'var(--fau-red)', marginBottom: 'var(--space-2)' }}>
            Course Syllabus
          </h1>
          <h2 style={{ marginBottom: 'var(--space-3)' }}>
            Machine Learning Operations (MLOps)
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-3)' }}>
            <div>
              <p><strong>Instructor:</strong> Dr. Lee</p>
              <p><strong>Department:</strong> Information Technology and Operations Management</p>
            </div>
            <div>
              <p><strong>Semester:</strong> Fall 2025</p>
              <p><strong>Class Time:</strong> MW 3:00 PM - 4:15 PM</p>
            </div>
            <div>
              <p><strong>Office:</strong> Liberal Arts Building - Room 467</p>
              <p><strong>Email:</strong> <a href="mailto:lee@fau.edu">lee@fau.edu</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Description */}
      <section style={{ padding: 'var(--space-6) 0', backgroundColor: 'var(--fau-sky-blue)' }}>
        <div className="container">
          <div className="card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <BookOpen size={28} style={{ color: 'var(--fau-electric-blue)' }} />
              Course Description
            </h3>
            <p>
              This course provides a comprehensive introduction to Machine Learning Operations (MLOps), bridging the gap 
              between machine learning development and production deployment. Students will learn industry-standard practices 
              for building, deploying, monitoring, and maintaining ML systems at scale.
            </p>
            <p style={{ marginBottom: 0 }}>
              Through hands-on projects and real-world case studies, students will gain practical experience with modern 
              MLOps tools and platforms including MLflow, Kubeflow, Docker, Kubernetes, and major cloud ML services. 
              The course emphasizes automated workflows, continuous integration/deployment, model versioning, and 
              production monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section style={{ padding: 'var(--space-6) 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
            <Target size={28} style={{ color: 'var(--fau-electric-blue)' }} />
            Learning Objectives
          </h3>
          <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
            <div className="card">
              <h4>1. ML Development & Experimentation</h4>
              <p style={{ marginBottom: 0 }}>
                Master reproducible ML development practices including experiment tracking, model versioning, 
                and hyperparameter optimization.
              </p>
            </div>
            <div className="card">
              <h4>2. Production Deployment</h4>
              <p style={{ marginBottom: 0 }}>
                Learn to deploy ML models using containers, REST APIs, and serverless architectures with proper 
                scaling and load balancing.
              </p>
            </div>
            <div className="card">
              <h4>3. CI/CD for ML</h4>
              <p style={{ marginBottom: 0 }}>
                Implement automated pipelines for model training, testing, validation, and deployment using 
                modern DevOps tools.
              </p>
            </div>
            <div className="card">
              <h4>4. Monitoring & Maintenance</h4>
              <p style={{ marginBottom: 0 }}>
                Develop strategies for monitoring model performance, detecting drift, and implementing 
                automated retraining workflows.
              </p>
            </div>
            <div className="card">
              <h4>5. Data Engineering for ML</h4>
              <p style={{ marginBottom: 0 }}>
                Build robust data pipelines with proper validation, feature stores, and data versioning for 
                production ML systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Topics */}
      <section style={{ padding: 'var(--space-6) 0', backgroundColor: 'var(--fau-sky-blue)' }}>
        <div className="container">
          <h3 style={{ marginBottom: 'var(--space-4)' }}>Course Topics by Week</h3>
          
          <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
            {[
              { week: '1-2', title: 'Introduction to MLOps', topics: 'ML lifecycle, MLOps principles, Tool ecosystem overview' },
              { week: '3-4', title: 'Experiment Tracking & Model Versioning', topics: 'MLflow, DVC, Experiment management, Model registry' },
              { week: '5-6', title: 'Containerization & Orchestration', topics: 'Docker fundamentals, Kubernetes basics, Container registries' },
              { week: '7-8', title: 'Model Deployment Strategies', topics: 'REST APIs, Batch processing, Real-time inference, Edge deployment' },
              { week: '9-10', title: 'CI/CD for ML', topics: 'GitHub Actions, Jenkins, Automated testing, Pipeline orchestration' },
              { week: '11-12', title: 'Data Pipeline Engineering', topics: 'Feature stores, Data validation, ETL workflows, Data versioning' },
              { week: '13-14', title: 'Monitoring & Observability', topics: 'Model monitoring, Drift detection, Alerting, Performance tracking' },
              { week: '15-16', title: 'Cloud ML Platforms & Final Project', topics: 'AWS SageMaker, Azure ML, GCP Vertex AI, Project presentations' },
            ].map((item) => (
              <div key={item.week} className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
                  <Calendar size={20} style={{ color: 'var(--fau-electric-blue)' }} />
                  <h4 style={{ marginBottom: 0 }}>Week {item.week}: {item.title}</h4>
                </div>
                <p style={{ marginBottom: 0, paddingLeft: 'calc(20px + var(--space-2))' }}>
                  {item.topics}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grading */}
      <section style={{ padding: 'var(--space-6) 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
            <Award size={28} style={{ color: 'var(--fau-electric-blue)' }} />
            Grading & Evaluation
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-3)' }}>
            <div className="card">
              <h4>Assignments (30%)</h4>
              <p style={{ marginBottom: 0 }}>
                Weekly hands-on assignments covering MLOps tools and techniques. Each assignment builds 
                practical skills in deployment, automation, and monitoring.
              </p>
            </div>
            <div className="card">
              <h4>Midterm Project (25%)</h4>
              <p style={{ marginBottom: 0 }}>
                Deploy an end-to-end ML pipeline with automated training and inference, demonstrating 
                version control and CI/CD practices.
              </p>
            </div>
            <div className="card">
              <h4>Final Project (35%)</h4>
              <p style={{ marginBottom: 0 }}>
                Complete MLOps implementation including data pipelines, model deployment, monitoring, 
                and automated retraining for a real-world use case.
              </p>
            </div>
            <div className="card">
              <h4>Participation (10%)</h4>
              <p style={{ marginBottom: 0 }}>
                Active engagement in class discussions, lab sessions, and collaborative problem-solving 
                activities.
              </p>
            </div>
          </div>

          <div style={{ 
            marginTop: 'var(--space-4)',
            padding: 'var(--space-3)',
            backgroundColor: 'var(--fau-sky-blue)',
            borderRadius: 'var(--border-radius-md)'
          }}>
            <h4>Grading Scale</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'var(--space-2)' }}>
              <p><strong>A:</strong> 93-100%</p>
              <p><strong>A-:</strong> 90-92%</p>
              <p><strong>B+:</strong> 87-89%</p>
              <p><strong>B:</strong> 83-86%</p>
              <p><strong>B-:</strong> 80-82%</p>
              <p><strong>C+:</strong> 77-79%</p>
              <p><strong>C:</strong> 73-76%</p>
              <p><strong>C-:</strong> 70-72%</p>
              <p style={{ marginBottom: 0 }}><strong>D-F:</strong> Below 70%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites & Requirements */}
      <section style={{ padding: 'var(--space-6) 0', backgroundColor: 'var(--fau-sky-blue)' }}>
        <div className="container">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
            <ClipboardList size={28} style={{ color: 'var(--fau-electric-blue)' }} />
            Prerequisites & Requirements
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-3)' }}>
            <div className="card">
              <h4>Prerequisites</h4>
              <ul style={{ marginLeft: 'var(--space-3)', marginBottom: 0 }}>
                <li>Proficiency in Python programming</li>
                <li>Understanding of data structures and algorithms</li>
                <li>Basic knowledge of machine learning concepts</li>
                <li>Familiarity with Git version control</li>
                <li>Command line/terminal experience</li>
              </ul>
            </div>

            <div className="card">
              <h4>Required Tools</h4>
              <ul style={{ marginLeft: 'var(--space-3)', marginBottom: 0 }}>
                <li>Python 3.8+ with pip/conda</li>
                <li>Docker Desktop</li>
                <li>Git and GitHub account</li>
                <li>Cloud account (AWS/Azure/GCP free tier)</li>
                <li>Code editor (VS Code recommended)</li>
              </ul>
            </div>

            <div className="card">
              <h4>Textbooks & Resources</h4>
              <ul style={{ marginLeft: 'var(--space-3)', marginBottom: 0 }}>
                <li><em>Building Machine Learning Pipelines</em> by Hapke & Nelson</li>
                <li><em>Introducing MLOps</em> by Treveil et al.</li>
                <li>Online documentation for MLflow, Kubeflow</li>
                <li>Cloud ML platform tutorials</li>
                <li>Course materials on Canvas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section style={{ padding: 'var(--space-6) 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <h3 style={{ marginBottom: 'var(--space-4)' }}>Course Policies</h3>
          
          <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
            <div className="card">
              <h4>Attendance</h4>
              <p style={{ marginBottom: 0 }}>
                Regular attendance is expected. Missing more than 3 classes may impact your participation grade. 
                Please notify the instructor in advance if you cannot attend.
              </p>
            </div>

            <div className="card">
              <h4>Late Submissions</h4>
              <p style={{ marginBottom: 0 }}>
                Assignments submitted late will receive a 10% penalty per day, up to 3 days. After 3 days, 
                submissions will not be accepted without prior arrangement.
              </p>
            </div>

            <div className="card">
              <h4>Academic Integrity</h4>
              <p style={{ marginBottom: 0 }}>
                All work must be your own. Collaboration is encouraged for learning, but submitted work must be 
                individual. Plagiarism or cheating will result in failing the course and referral to university 
                administration per FAU's Code of Academic Integrity.
              </p>
            </div>

            <div className="card">
              <h4>Accessibility</h4>
              <p style={{ marginBottom: 0 }}>
                Students with disabilities requiring accommodations should register with the FAU Student Accessibility 
                Services office and provide documentation to the instructor as early as possible in the semester.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{
        backgroundColor: 'var(--fau-blue)',
        color: 'var(--white)',
        padding: 'var(--space-6) 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h3 style={{ color: 'var(--white)', marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)' }}>
            <Users size={28} />
            Office Hours & Contact
          </h3>
          <p style={{ fontSize: 'var(--fs-h4)', marginBottom: 'var(--space-3)', opacity: 0.95 }}>
            Office Hours: Tuesdays & Thursdays, 2:00 PM - 3:30 PM
          </p>
          <p style={{ marginBottom: 'var(--space-4)', opacity: 0.9 }}>
            Or by appointment via email
          </p>
          <a href="mailto:lee@fau.edu" className="btn btn-primary">
            <Mail size={20} style={{ display: 'inline-block', marginRight: 'var(--space-1)', verticalAlign: 'middle' }} />
            Email Dr. Lee
          </a>
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
