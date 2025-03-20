
import { Check, X } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-slate-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6 animate-fade-in">
            From Data Chaos to Clarity in Minutes
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in">
            See how our platform transforms scattered information from JIRA, slack channels, meeting transcripts and internal docs across your enterprise tools into structured, actionable insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Problem Side */}
          <div className="animate-fade-in-left">
            <div className="glass-card h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
                  <X className="h-5 w-5 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold">Before - Chaotic & Overwhelming</h3>
              </div>

              <div className="flex-1 space-y-4">
                <div className="rounded-lg bg-white p-4 border border-red-100 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">Jira Tickets</div>
                    <div className="text-xs px-2 py-1 rounded bg-red-50 text-red-500">Scattered</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-slate-100 rounded"></div>
                    <div className="h-3 w-2/3 bg-slate-100 rounded"></div>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-4 border border-red-100 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">Slack Conversations</div>
                    <div className="text-xs px-2 py-1 rounded bg-red-50 text-red-500">Fragmented</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-200 flex-shrink-0"></div>
                      <div>
                        <div className="h-3 w-32 bg-slate-100 rounded mb-1"></div>
                        <div className="h-3 w-48 bg-slate-100 rounded"></div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-200 flex-shrink-0"></div>
                      <div>
                        <div className="h-3 w-24 bg-slate-100 rounded mb-1"></div>
                        <div className="h-3 w-40 bg-slate-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-4 border border-red-100 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">Meeting Notes</div>
                    <div className="text-xs px-2 py-1 rounded bg-red-50 text-red-500">Disorganized</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-slate-100 rounded"></div>
                    <div className="h-3 w-5/6 bg-slate-100 rounded"></div>
                    <div className="h-3 w-4/6 bg-slate-100 rounded"></div>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-4 border border-red-100 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">Internal Documents</div>
                    <div className="text-xs px-2 py-1 rounded bg-red-50 text-red-500">Unstructured</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-slate-100 rounded"></div>
                    <div className="h-3 w-full bg-slate-100 rounded"></div>
                    <div className="h-3 w-3/6 bg-slate-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Side */}
          <div className="animate-fade-in-right">
            <div className="glass-card h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold">After - Clear & Prioritized</h3>
              </div>

              <div className="flex-1 space-y-6">
                <div className="rounded-lg bg-white p-4 border border-green-100 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <div className="font-medium">High Priority</div>
                    <div className="text-xs px-2 py-1 rounded bg-green-50 text-green-500">Strategic</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-red-100 mr-2"></div>
                      <div className="h-4 w-full bg-red-50 rounded"></div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-orange-100 mr-2"></div>
                      <div className="h-4 w-full bg-orange-50 rounded"></div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-4 border border-green-100 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <div className="font-medium">Medium Priority</div>
                    <div className="text-xs px-2 py-1 rounded bg-green-50 text-green-500">Tactical</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-100 mr-2"></div>
                      <div className="h-4 w-full bg-yellow-50 rounded"></div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-100 mr-2"></div>
                      <div className="h-4 w-full bg-yellow-50 rounded"></div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-100 mr-2"></div>
                      <div className="h-4 w-full bg-yellow-50 rounded"></div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-4 border border-green-100 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <div className="font-medium">Low Priority</div>
                    <div className="text-xs px-2 py-1 rounded bg-green-50 text-green-500">Operational</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-blue-100 mr-2"></div>
                      <div className="h-4 w-full bg-blue-50 rounded"></div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-blue-100 mr-2"></div>
                      <div className="h-4 w-full bg-blue-50 rounded"></div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-4 border border-green-100 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <div className="font-medium">Next Actions</div>
                    <div className="text-xs px-2 py-1 rounded bg-green-50 text-green-500">Aligned</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded mr-2 border border-green-300 flex items-center justify-center">
                        <Check className="h-3 w-3 text-green-500" />
                      </div>
                      <div className="h-4 w-full bg-slate-50 rounded"></div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded mr-2 border border-green-300 flex items-center justify-center">
                        <Check className="h-3 w-3 text-green-500" />
                      </div>
                      <div className="h-4 w-full bg-slate-50 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
