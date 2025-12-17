import React, { useState } from "react";
import {
  Download,
  Play,
  ChevronRight,
  CheckCircle,
  Clock,
  BookOpen,
  Shield,
  Zap,
  FileText,
  Film,
  Video,
  Headphones,
  Star,
  Brain,
  Globe,
  X,
  Share2,
  ExternalLink,
  Sparkles,
  Users,
  Award,
  Home,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const CustomerView = () => {
  const [activeVideoCategory, setActiveVideoCategory] = useState("how-to-use");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [downloadStatus, setDownloadStatus] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [myArray, setMyArray] = useState(location.state?.myArray || {});

  const handleShareVideo = (video) => {
    const videoUrl = `https://youtu.be/${video.youtubeId}`;
    if (navigator.share) {
      navigator.share({
        title: video.title,
        text: `Watch "${video.title}" on AI Shikshak`,
        url: videoUrl,
      });
    } else {
      navigator.clipboard.writeText(videoUrl);
      alert("Link copied to clipboard!");
    }
  };

  const handleDownloadBrochure = () => {
    const pdfUrl = "/Brochure/ai-shikshak-brochure.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "AI-Shikshak-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadStatus("success");
    setTimeout(() => setDownloadStatus(null), 3000);
  };

  const handleGoToDashboard = () => {
    navigate("/dashboard", { state: { myArray } });
  };

  const videoCategories = {
    "how-to-use": {
      title: "How to Use AI Shikshak",
      icon: <Video className="w-5 h-5" />,
      videos: [
        {
          id: "1",
          title: "CBSE Class 10 – Social Science",
          youtubeId: "ZhGl1IzKan4",
        },
        {
          id: "2",
          title: "CBSE Class 10 – Science",
          youtubeId: "Qsz7LHWpSWc",
        },
        {
          id: "3",
          title: "Class 10 State Board – Maths ",
          youtubeId: "k-JtUAg6pKI",
        },
        {
          id: "4",
          title: "10th State Board Social Science",
          youtubeId: "zEm3PV9KRtg",
        },
        {
          id: "5",
          title: "CBSE Class 10 Science",
          youtubeId: "Pa0E4zQBuUo",
        },
        {
          id: "6",
          title: "10th CBSE Social Science",
          youtubeId: "LIeObLOzxhY",
        },
        {
          id: "7",
          title: "MCQ Questions ",
          youtubeId: "XC2hn660Q44",
        },
        {
          id: "8",
          title: "Short Queries",
          youtubeId: "ppHdzPk7g8E",
        },
        {
          id: "9",
          title: "Image Explanations",
          youtubeId: "4dUzCvUN6o4",
        },
        {
          id: "10",
          title: "Translation Tutorial",
          youtubeId: "dO2FNE_QXaA",
        },
        {
          id: "11",
          title: "2nd PUC Maths ",
          youtubeId: "XooK-5yakqU",
        },
      ],
    },
    interview: {
      title: "Interviews",
      icon: <Users className="w-5 h-5" />,
      videos: [
        {
          id: "i1",
          title: "AI Learning for SSLC, PUC & CBSE Exams",
          youtubeId: "woZ4D3y4558",
        },
      ],
    },
    "case-studies": {
      title: "Case Studies",
      icon: <Award className="w-5 h-5" />,
      videos: [
        {
          id: "c1",
          title: "",
          youtubeId: "placeholder",
        },
      ],
    },
  };

  const benefits = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Personalization",
      description: "Adapts to each student's unique learning style and pace",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24×7 Instant Support",
      description: "Available anytime on WhatsApp - day or night",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Exam-Oriented Learning",
      description: "NCERT-aligned answers with board exam patterns",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Fear-Free Environment",
      description: "Ask basic questions without hesitation or judgment",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "All-in-One Solution",
      description: "Replaces tuition, guides, notes, and doubt sessions",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Accessible Everywhere",
      description: "Works on basic phones via WhatsApp - no app needed",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const contentSections = [
    {
      title: "1. Students don't learn at the same speed",
      bg: "from-blue-600 to-blue-800",
      reality: {
        title: "In a classroom:",
        points: [
          "One teacher → 40–60 students",
          "Teacher moves at one speed",
          "Slow learners hesitate to ask",
          "Fast learners get bored",
        ],
      },
      solution: {
        title: "AI Shikshak adapts to the student, not the other way around.",
        points: [
          "A student can ask the same doubt 10 times without fear or judgment",
        ],
      },
    },
    {
      title: "2. Doubts come outside classroom hours",
      bg: "from-purple-600 to-purple-800",
      reality: {
        title: "Most doubts come for Students:",
        points: [
          "Late night",
          "Early morning",
          "During self-study",
          "Just before exams",
        ],
      },
      solution: {
        title: "AI Shikshak is always available on WhatsApp.",
        points: [
          "No timing restrictions",
          "No appointment needed",
          "No waiting",
        ],
      },
    },
    {
      title: "3. Students need exam-oriented answers, not Google answers",
      bg: "from-green-600 to-green-800",
      reality: {
        title: "Google / ChatGPT give:",
        points: [
          "Long explanations",
          "Mixed syllabus",
          "Non-board pattern answers",
        ],
      },
      solution: {
        title: "AI Shikshak gives:",
        points: [
          "NCERT-aligned explanations",
          "CBSE & Karnataka State Board focus",
          "Board-exam answer format",
          "Step-by-step clarity for scoring marks",
          "Critical for SSLC, PUC, and board exams",
        ],
      },
    },
    {
      title: "4. Many students fear asking 'basic questions'",
      bg: "from-orange-600 to-orange-800",
      reality: {
        title: "Students often think:",
        points: [
          '"This is a silly doubt"',
          '"Teacher will scold"',
          '"Friends will laugh"',
          "So they carry weak fundamentals silently",
        ],
      },
      solution: {
        title: "With AI Shikshak:",
        points: [
          "No embarrassment",
          "No comparison",
          "Learn from basics to advanced",
          "Strong basics = better scores",
        ],
      },
    },
    {
      title: "5. One tool replaces multiple supports",
      bg: "from-red-600 to-red-800",
      reality: {
        title: "Normally a student needs:",
        points: [
          "Tuition",
          "Guide books",
          "Notes",
          "Doubt classes",
          "Revision support",
        ],
      },
      solution: {
        title: "AI Shikshak combines:",
        points: [
          "Teaching",
          "Doubt solving",
          "Revision",
          "Practice",
          "Exam guidance",
          "All this at an affordable price — ₹888 for classes 5–10, ₹999 for PUC",
        ],
      },
    },
    {
      title: "6. It works on a simple mobile phone",
      bg: "from-indigo-600 to-indigo-800",
      solution: {
        title: "If a student can use WhatsApp, they can use AI Shikshak",
        points: [
          "No laptop needed",
          "No app learning curve",
          "This makes it powerful for:",
          "- Rural students",
          "- Middle-class families",
          "- First-generation learners",
        ],
      },
    },
    {
      title: "7. It builds confidence, not dependency",
      bg: "from-teal-600 to-teal-800",
      solution: {
        title:
          "AI Shikshak doesn't just give answers. It explains the 'why' behind answers.",
        points: [
          "This helps students:",
          "- Think clearly",
          "- Write better answers",
          "- Face exams with confidence",
        ],
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Play className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">{selectedVideo.title}</h3>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="aspect-video bg-black">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleShareVideo(selectedVideo)}
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all shadow-md font-medium"
                >
                  <Share2 className="mr-2 w-5 h-5" />
                  Share Video
                </button>
                <a
                  href={`https://youtu.be/${selectedVideo.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-md font-medium"
                >
                  <ExternalLink className="mr-2 w-5 h-5" />
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden pt-32 pb-20">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        {/* Home Icon Button */}
        <div className="absolute top-20 right-6 z-10">
          <button
            onClick={handleGoToDashboard}
            className="flex items-center justify-center p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl group"
            title="Go to Dashboard"
          >
            <Home className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Why <span className="text-yellow-300">AI Shikshak</span> is
              Essential For Students
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Solving real educational gaps with personalized, 24×7 AI-powered
              learning
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Statement - Simplified and more attractive */}
        <div className="text-center mb-16">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl rounded-full"></div>
            <div className="relative"></div>
          </div>
        </div>

        {/* Introduction */}
        <div className="text-center mb-20">
          <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            AI Shikshak matters because it solves real gaps in today's Education
            System — not just because it is "AI".
          </p>
        </div>

        {/* Full Content Sections - Exact as shared */}
        <div className="space-y-12 mb-20">
          {contentSections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-200"
            >
              <div className="md:flex">
                <div
                  className={`md:w-2/5 bg-gradient-to-br ${section.bg} p-10 text-white relative`}
                >
                  <div className="text-7xl font-extrabold text-white/20 mb-6">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{section.title}</h3>
                  <p className="text-white/90 text-lg">
                    {section.solution.title}
                  </p>
                </div>
                <div className="md:w-3/5 p-10">
                  <div className="space-y-8">
                    {section.reality && (
                      <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border-l-4 border-red-500">
                        <h4 className="font-bold text-2xl mb-6 flex items-center">
                          <ChevronRight className="w-6 h-6 text-red-500 mr-3" />
                          {section.reality.title}
                        </h4>
                        <ul className="space-y-3">
                          {section.reality.points.map((point, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-3 h-3 bg-red-500 rounded-full mr-3 mt-1.5"></div>
                              <span className="text-gray-700 text-lg">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-l-4 border-green-500">
                      <h4 className="font-bold text-2xl mb-6 flex items-center">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                        With AI Shikshak
                      </h4>
                      <ul className="space-y-3">
                        {section.solution.points.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-3 mt-1.5"></div>
                            <span className="text-gray-700 text-lg">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">
              Key Benefits
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 hover:border-blue-300 hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div
                  className={`inline-flex p-4 bg-gradient-to-r ${b.gradient} text-white rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  {b.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {b.title}
                </h3>
                <p className="text-gray-600 text-lg">{b.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brochures */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Brochures</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl shadow-2xl overflow-hidden group">
              <div className="p-10">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="flex items-center mb-8 md:mb-0">
                    <div className="p-5 bg-white/20 backdrop-blur-md rounded-2xl mr-6 group-hover:scale-110 transition-transform">
                      <FileText className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-3">
                        AI Shikshak Brochure English
                      </h3>
                      <p className="text-blue-100 text-lg mb-3">
                        Complete guide to features & benefits
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleDownloadBrochure}
                    className={`px-8 py-4 font-bold rounded-xl transition-all shadow-xl hover:scale-105 ${
                      downloadStatus === "success"
                        ? "bg-green-500 text-white"
                        : "bg-white text-blue-600"
                    }`}
                  >
                    <Download className="inline mr-3 w-6 h-6" />
                    {downloadStatus === "success"
                      ? "Downloaded!"
                      : "Download PDF"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Resources */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">
              Video Resources
            </h2>
            <p className="text-gray-600 text-xl">
              Learn how to use AI Shikshak effectively
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="flex justify-center mb-10">
            <div className="inline-flex space-x-3 bg-white p-2 rounded-2xl shadow-lg">
              {Object.keys(videoCategories).map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveVideoCategory(c)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center ${
                    activeVideoCategory === c
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md scale-105"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {videoCategories[c].icon}
                  <span className="ml-2 hidden sm:inline">
                    {videoCategories[c].title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-200">
            <div className="p-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
              <div className="relative flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-3">
                    {videoCategories[activeVideoCategory].title}
                  </h3>
                  <p className="text-blue-100 text-lg">
                    {activeVideoCategory === "how-to-use"
                      ? "Step-by-step tutorials to get started"
                      : "Coming soon - Stay tuned for updates"}
                  </p>
                </div>
                <Film className="w-16 h-16 opacity-30" />
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {videoCategories[activeVideoCategory].videos.map((v) => (
                  <div
                    key={v.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-200 hover:border-blue-400 hover:shadow-2xl transition-all transform hover:-translate-y-1"
                  >
                    <div
                      className="relative aspect-video cursor-pointer group"
                      onClick={() => !v.comingSoon && setSelectedVideo(v)}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${v.youtubeId}/maxresdefault.jpg`}
                        alt={v.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                      {v.comingSoon ? (
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                          <span className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-bold">
                            Coming Soon
                          </span>
                        </div>
                      ) : (
                        <>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="bg-blue-600 p-4 rounded-full shadow-lg">
                              <Play
                                className="w-8 h-8 text-white"
                                fill="white"
                              />
                            </div>
                          </div>
                          <div className="absolute bottom-3 right-3 bg-black/80 text-white text-sm px-2 py-1 rounded">
                            {v.duration}
                          </div>
                        </>
                      )}
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-gray-800 mb-4 line-clamp-2 text-lg">
                        {v.title}
                      </h4>
                      {!v.comingSoon && (
                        <div className="flex justify-between">
                          <button
                            onClick={() => setSelectedVideo(v)}
                            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                          >
                            <Play className="w-4 h-4 mr-1" />
                            Watch
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleShareVideo(v);
                            }}
                            className="text-gray-500 hover:text-gray-700 flex items-center"
                          >
                            <Share2 className="w-4 h-4 mr-1" />
                            Share
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerView;
