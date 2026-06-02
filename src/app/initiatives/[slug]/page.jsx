
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, 
  Sprout, 
  Trees, 
  Droplets, 
  Waves, 
  Leaf, 
  Flower,
  CheckCircle2,
  Eye,
  HelpCircle,
  TrendingUp,
  Users,
  Building2,
  Calendar,
  Sparkles
} from "lucide-react";
import { INITIATIVES_DATA } from "@/data/initiatives";

const iconMap = {
  Sprout,
  Trees,
  Droplets,
  Waves,
  Leaf,
  Flower,
};

export default async function InitiativeDetails({ params }) {
  const { slug } = await params;
  const initiative = INITIATIVES_DATA.find((item) => item.id === slug);

  if (!initiative) {
    notFound();
  }

  const IconComponent = iconMap[initiative.icon] || Sprout;

  return (
    <section className="bg-[#f7faf5] min-h-screen text-[#102414] font-sans pb-24 selection:bg-[#b6ff7a]">
      <div className="relative h-[50vh] min-h-[400px] sm:min-h-[500px] w-full overflow-hidden">
        <img
          src={initiative.image}
          alt={initiative.title}
          className="w-full h-full object-cover transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#102414] via-[#102414]/50 to-transparent" />

        <div className="absolute top-0 inset-x-0 pt-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              <ArrowLeft size={16} />
              <span>Back to Initiatives</span>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 pb-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-[#b6ff7a] text-[#102414] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-md mb-4">
                <IconComponent className="w-3.5 h-3.5" />
                {initiative.category}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
                {initiative.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white border border-[#dde8d8] rounded-3xl p-6 shadow-sm flex flex-col justify-between">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-[#1f7d2d]" /> {initiative.stats.label || "Impact"}
            </span>
            <p className="text-2xl sm:text-3xl font-black text-[#1f7d2d] mt-4">{initiative.stats.primary}</p>
          </div>
          
          <div className="bg-white border border-[#dde8d8] rounded-3xl p-6 shadow-sm flex flex-col justify-between">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
              <Trees className="w-3.5 h-3.5 text-[#1f7d2d]" /> Plantations / Scale
            </span>
            <p className="text-2xl sm:text-3xl font-black text-[#1f7d2d] mt-4">{initiative.stats.trees}</p>
          </div>

          <div className="bg-white border border-[#dde8d8] rounded-3xl p-6 shadow-sm flex flex-col justify-between">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#1f7d2d]" /> Volunteers Involved
            </span>
            <p className="text-2xl sm:text-3xl font-black text-[#1f7d2d] mt-4">{initiative.stats.volunteers}</p>
          </div>

          <div className="bg-white border border-[#dde8d8] rounded-3xl p-6 shadow-sm flex flex-col justify-between">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#1f7d2d]" /> Active Hubs
            </span>
            <p className="text-2xl sm:text-3xl font-black text-[#1f7d2d] mt-4">{initiative.stats.communities} Communities</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-[#dde8d8] shadow-xs">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102414] mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#1f7d2d] rounded-full inline-block" />
                About This Initiative
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-[#526456]">
                {initiative.longDesc}
              </p>
            </div>

            {initiative.whyItMatters && (
              <div className="bg-amber-50/60 rounded-[32px] p-8 border border-amber-200/50">
                <h3 className="text-xl font-bold text-[#102414] mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-amber-600" />
                  Why It Matters
                </h3>
                <p className="text-[#526456] leading-relaxed text-sm sm:text-base">
                  {initiative.whyItMatters}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-[28px] p-6 border border-[#dde8d8]">
                <h4 className="font-bold text-[#102414] flex items-center gap-2 mb-3">
                  <Eye className="w-5 h-5 text-[#1f7d2d]" />
                  Our Future Vision
                </h4>
                <p className="text-xs sm:text-sm text-[#526456] leading-relaxed">
                  {initiative.futureVision}
                </p>
              </div>

              <div className="bg-[#1f7d2d]/5 rounded-[28px] p-6 border border-[#1f7d2d]/10">
                <h4 className="font-bold text-[#1f7d2d] flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-[#1f7d2d]" />
                  Core Strategy Benefit
                </h4>
                <p className="text-xs sm:text-sm text-[#102414]/90 leading-relaxed">
                  {initiative.keyBenefit}
                </p>
              </div>
            </div>

            {initiative.gallery && initiative.gallery.length > 0 && (
              <div className="bg-white rounded-[32px] p-8 border border-[#dde8d8]">
                <h3 className="text-2xl font-extrabold text-[#102414] mb-6">Project Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {initiative.gallery.map((imgUrl, idx) => (
                    <div key={idx} className="relative h-44 rounded-2xl overflow-hidden group bg-gray-100">
                      <img 
                        src={`${imgUrl}?auto=format&fit=crop&w=600&q=80`} 
                        alt={`Gallery item ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-8">
            {initiative.benefits && (
              <div className="bg-white rounded-[32px] p-8 border border-[#dde8d8] shadow-xs">
                <h3 className="text-xl font-bold text-[#102414] mb-5">Key Advantages</h3>
                <ul className="space-y-4">
                  {initiative.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-[#526456]">
                      <CheckCircle2 className="w-5 h-5 text-[#1f7d2d] shrink-0 mt-0.5" />
                      <span className="leading-normal font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {initiative.process && (
              <div className="bg-white rounded-[32px] p-8 border border-[#dde8d8] shadow-xs relative overflow-hidden">
                <h3 className="text-xl font-bold text-[#102414] mb-6 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#1f7d2d]" />
                  Implementation Framework
                </h3>
                
                <div className="relative border-l-2 border-dashed border-[#dde8d8] ml-3 pl-6 space-y-6">
                  {initiative.process.map((step, idx) => (
                    <div key={idx} className="relative group">
                      <span className="absolute -left-[35px] top-0.5 w-6 h-6 rounded-full bg-[#f1f8ee] border-2 border-[#1f7d2d] flex items-center justify-center text-[11px] font-extrabold text-[#1f7d2d] group-hover:bg-[#1f7d2d] group-hover:text-white transition-colors duration-300">
                        {idx + 1}
                      </span>
                      <h4 className="font-bold text-[#102414] text-sm sm:text-base">{step}</h4>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
