import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Star } from 'lucide-react';
import '../styles/Feedback.css';

function Feedback() {
  const feedbacks = [
    {
      name: "John Smith",
      role: "High School Player",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      text: "SWBS transformed my game completely. The coaches here are incredible and the facilities are top-notch. I've improved more in 6 months than I did in 2 years of regular training.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Parent",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
      text: "My daughter has gained so much confidence since joining SWBS. The coaches focus on both skill development and character building. It's more than just basketball here.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "College Recruit",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      text: "Thanks to SWBS, I received multiple college offers. Their college prep program and exposure events really helped me get noticed by scouts.",
      rating: 5
    }
  ];

  return (
    <section id="feedback" className="feedback-section">
      <div className="container py-5">
        <h2 className="text-center mb-5">What Our Players Say</h2>
        
        <Carousel 
          className="feedback-carousel"
          indicators={true}
          controls={true}
          interval={5000}
        >
          <Carousel.Item>
            <div className="d-flex justify-content-around">
              {feedbacks.map((feedback, index) => (
                <div key={index} className="feedback-card" style={{ width: '30%' }}>
                  <div className="feedback-content">
                    <div className="feedback-image">
                      <img src={feedback.image} alt={feedback.name} className="rounded-circle" />
                    </div>
                    <div className="feedback-text">
                      <p className="testimonial-text">{feedback.text}</p>
                      <div className="rating mb-2">
                        {[...Array(feedback.rating)].map((_, i) => (
                          <Star key={i} size={20} fill="#ffc107" color="#ffc107" />
                        ))}
                      </div>
                      <h5 className="feedback-name">{feedback.name}</h5>
                      <p className="feedback-role">{feedback.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default Feedback;