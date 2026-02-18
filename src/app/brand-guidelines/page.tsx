import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function BrandGuidelines() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex items-center justify-between">
          <Link href="/" className="font-primary text-2xl font-bold tracking-tight">Echo Memory</Link>
          <Button variant="ghost" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </header>

      <main className="py-20 px-6 md:px-8 max-w-7xl mx-auto space-y-20">
        {/* Title */}
        <section className="text-center space-y-4">
          <h1 className="font-primary text-5xl font-bold tracking-tight">Brand Guidelines</h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            A comprehensive guide to the Echo Memory visual and verbal identity.
          </p>
        </section>

        {/* Brand Identity */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div>
              <h2 className="font-primary text-3xl font-semibold mb-4">Brand Identity</h2>
              <p className="text-secondary leading-relaxed">
                Echo Memory is a privacy-first digital memorial service that transforms your digital footprints into curated, time-capsule memories. We exist to help people preserve, revisit, and pass on their most meaningful moments with dignity and intention.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-primary text-lg">Name</h3>
                <p className="text-secondary">Echo Memory</p>
              </div>
              <div>
                <h3 className="font-medium text-primary text-lg">Tagline</h3>
                <p className="text-secondary italic">"Quietly preserve your meaningful digital moments into elegant time capsules."</p>
              </div>
              <div>
                <h3 className="font-medium text-primary text-lg">Purpose</h3>
                <p className="text-secondary leading-relaxed">
                  To provide a secure, intentional platform for capturing and safeguarding digital memories, free from surveillance and data exploitation, enabling users to craft personal legacies that endure.
                </p>
              </div>
            </div>
          </div>
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Quick Reference</CardTitle>
              <CardDescription>Core brand attributes at a glance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                <span className="font-medium">Serene</span>
                <span className="text-secondary text-sm">— calm and contemplative</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                <span className="font-medium">Minimalist</span>
                <span className="text-secondary text-sm">— Swiss precision, clarity</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                <span className="font-medium">Trustworthy</span>
                <span className="text-secondary text-sm">— privacy-first ethos</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                <span className="font-medium">Warm</span>
                <span className="text-secondary text-sm">— human-centric, not cold</span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Colors */}
        <section className="space-y-8">
          <h2 className="font-primary text-3xl font-semibold text-center">Color Palette</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Primary</CardTitle>
                <CardDescription>Headlines, key text, UI</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="w-full h-24 rounded-md bg-primary"></div>
                <div className="space-y-1">
                  <p className="font-mono text-sm">#0F172A</p>
                  <p className="text-secondary text-sm">Slate 900</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Secondary</CardTitle>
                <CardDescription>Body text, secondary UI</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="w-full h-24 rounded-md bg-secondary"></div>
                <div className="space-y-1">
                  <p className="font-mono text-sm">#475569</p>
                  <p className="text-secondary text-sm">Slate 600</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Accent</CardTitle>
                <CardDescription>CTAs, highlights, links</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="w-full h-24 rounded-md bg-accent"></div>
                <div className="space-y-1">
                  <p className="font-mono text-sm">#F59E0B</p>
                  <p className="text-secondary text-sm">Amber 500</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Background</CardTitle>
                <CardDescription>Main page background</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="w-full h-16 rounded-md bg-background border border-border"></div>
                <div className="space-y-1">
                  <p className="font-mono text-sm">#FFFFFF</p>
                  <p className="text-secondary text-sm">Pure White</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Surface</CardTitle>
                <CardDescription>Cards, alternate sections</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="w-full h-16 rounded-md bg-secondary/20"></div>
                <div className="space-y-1">
                  <p className="font-mono text-sm">#F8FAFC</p>
                  <p className="text-secondary text-sm">Slate 50</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-8">
          <h2 className="font-primary text-3xl font-semibold text-center">Typography</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Primary Font: Syne</CardTitle>
                <CardDescription>Google Fonts: <a href="https://fonts.google.com/specimen/Syne" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">fonts.google.com/specimen/Syne</a></CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <p className="font-primary text-5xl font-bold">Aa</p>
                  <p className="text-secondary text-sm">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>abcdefghijklmnopqrstuvwxyz<br/>0123456789</p>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-secondary text-sm">
                  <li>Weights: 400, 500, 600, 700, 800</li>
                  <li>Used for headlines, hero, display</li>
                  <li>Scale: Hero 48–72px, H1 36px, H2 24px</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Secondary Font: Inter</CardTitle>
                <CardDescription>Google Fonts: <a href="https://fonts.google.com/specimen/Inter" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">fonts.google.com/specimen/Inter</a></CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <p className="font-secondary text-2xl">Aa</p>
                  <p className="text-secondary text-sm">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>abcdefghijklmnopqrstuvwxyz<br/>0123456789</p>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-secondary text-sm">
                  <li>Weights: 300, 400, 500, 600, 700</li>
                  <li>Used for body, UI, navigation</li>
                  <li>Scale: Body 16px, Caption 12px</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Voice & Tone */}
        <section className="space-y-8">
          <h2 className="font-primary text-3xl font-semibold text-center">Voice & Tone</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Warm but Precise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary leading-relaxed">
                  We speak with calm confidence. We're helpful without being hype-y. Our words are chosen with care, not filler.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>No Jargon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary leading-relaxed">
                  Simple, clear language. We explain technical concepts in plain terms. Everyone deserves to understand their digital legacy.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Quietly Confident</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary leading-relaxed">
                  We don't shout. Our product's elegance speaks for itself. We let the user's memories take center stage; we're the elegant frame.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Do's and Don'ts */}
        <section className="space-y-8">
          <h2 className="font-primary text-3xl font-semibold text-center">Do's and Don'ts</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">Do</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-secondary">
                <p>• Use ample whitespace to create breathing room.</p>
                <p>• Maintain strict grid alignment.</p>
                <p>• Use high-quality, contemplative photography.</p>
                <p>• Keep copy concise and meaningful.</p>
                <p>• Apply the accent color sparingly for impact.</p>
                <p>• Always use Syne for headlines, Inter for body.</p>
              </CardContent>
            </Card>
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-red-700">Don't</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-secondary">
                <p>• Use bright, saturated colors outside the palette.</p>
                <p>• Add decorative patterns or busy textures.</p>
                <p>• Mix additional fonts beyond Syne and Inter.</p>
                <p>• Write marketing hype or jargon.</p>
                <p>• Use shadows that are too deep or heavy.</p>
                <p>• Clutter layouts with unnecessary elements.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12 px-6 md:px-8">
        <div className="max-w-7xl mx-auto text-center text-secondary text-sm">
          <p>© 2026 Echo Memory, Inc. • Brand Guidelines v1.0</p>
        </div>
      </footer>
    </div>
  );
}
```

Now I have both pages. Next, I need to install dependencies and build the project to verify no errors. But first, let's set up Git and create a repo.

According to the instructions: "Initialize Git, create a new public GitHub repo (gh repo create), push the code, deploy to Vercel (vercel --yes --prod). Report the live Vercel URL."

I'll need to run these commands in the project directory. Let's do step by step.

First, ensure we are in the correct directory. Since each exec is independent, I'll use absolute paths.

Let me run:

cd /Users/mike/.openclaw/workspace/landing-page-generator/echo-memory-app

Then:
git init
git add .
git commit -m "Initial commit: Echo Memory landing page"

Then gh repo create. But I need to know the repository name. I'll create a repo named "echo-memory-landing" or just "echo-memory". I'll use "echo-memory-landing". But gh repo create requires authentication. I assume gh CLI is installed and authenticated. The command: gh repo create echo-memory-landing --public --source=. --remote=origin

Let's do it.
</think>
Now let's initialize Git, commit, and push to GitHub:<tool_call>
<function=exec>