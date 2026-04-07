"use client";

import { useEffect, useState } from "react";

interface GoogleReview {
  author_name: string;
  profile_photo_url: string;
  text: string;
  rating: number;
}

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTechstrotaReviews = async () => {
      try {
        // 🔥 YOUR TECHSTROTA GOOGLE REVIEWS - JUST ADD KEYS:
        const PLACE_ID = "16844267613454240620"; // Extracted from your link!
        const API_KEY = "AIzaSyBJR6JddRVVvsWizZb0W-S5aWkGb7LHJuc"; // Get from Google Cloud Console

        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`,
        );

        const data = await response.json();

        if (data.status === "OK" && data.result?.reviews?.length > 0) {
          // ✅ ONLY 4-5 STAR GOOGLE REVIEWS
          const goodReviews = data.result.reviews
            .filter((review: any) => review.rating >= 4)
            .map((review: any) => ({
              author_name: review.author_name,
              profile_photo_url:
                review.profile_photo_url ||
                `https://via.placeholder.com/56/64748B/FFFFFF?text=${review.author_name[0]}`,
              text: review.text || "Excellent service!",
              rating: review.rating,
            }));

          setReviews(goodReviews);
        }
      } catch (error) {
        console.error("https://admin.techstrota.com/api/google-reviews", error);
        setLoading(false);
      }
    };

    // 🔥 UNCOMMENT TO SHOW REAL TECHSTROTA REVIEWS:
    fetchTechstrotaReviews();
  }, []);

  const marqueeReviews = [...reviews, ...reviews];

  if (loading) {
    return (
      <section className="py-20 min-h-[400px] flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl text-gray-300">
            Loading Techstrota Google Reviews...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 overflow-hidden bg-gradient-to-b from-slate-900/80 via-slate-800 to-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 tracking-tight">
            Techstrota Google Reviews
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real reviews from Ahmedabad clients
          </p>
        </div>

        {reviews.length > 0 ? (
          <div className="w-full [mask-image:linear-gradient(90deg,transparent_0%,white_10%,white_90%,transparent_100%)]">
            <div className="flex gap-8 animate-marquee px-4">
              {marqueeReviews.map((review, index) => (
                <div
                  key={`${review.author_name}-${index}`}
                  className="min-w-[360px] bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl hover:shadow-blue-500/25 hover:scale-[1.02] transition-all duration-300 flex-shrink-0"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <img
                      src={review.profile_photo_url}
                      alt={`${review.author_name}'s profile`}
                      className="w-16 h-16 rounded-2xl ring-2 ring-blue-400/30 flex-shrink-0 shadow-lg"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          `https://via.placeholder.com/64/3B82F6/FFFFFF?text=${review.author_name.charAt(0)}`;
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-xl text-white truncate">
                        {review.author_name}
                      </h3>
                      <div className="flex items-center gap-1 mt-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-xl transition-all ${i < review.rating ? "text-yellow-400 drop-shadow-lg" : "text-gray-600"}`}
                          >
                            ⭐
                          </span>
                        ))}
                        <span className="ml-2 text-sm font-semibold text-gray-400">
                          ({review.rating}/5)
                        </span>
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-gray-200 leading-relaxed text-lg font-medium italic">
                    "{review.text}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-blue-500/10 border-2 border-dashed border-blue-500/30 rounded-3xl p-12 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                🔑 Add API Key
              </h3>
              <p className="text-blue-200 mb-6">
                Replace{" "}
                <code className="bg-slate-800 px-2 py-1 rounded font-mono text-sm">
                  YOUR_GOOGLE_API_KEY_HERE
                </code>
              </p>
              <p className="text-sm text-gray-400">
                Google Cloud Console → Credentials → Create API Key → Enable
                Places API
              </p>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
          display: flex;
          will-change: transform;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 35s;
          }
        }
      `}</style>
    </section>
  );
}
