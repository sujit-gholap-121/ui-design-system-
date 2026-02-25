import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
} from '@my-ds/ui'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-3xl font-bold mb-2">My Design System</h1>
      <p className="text-muted-foreground mb-8">Component library demo</p>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Button variants</h2>
        <div className="flex gap-3 flex-wrap">
          <Button>Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Button sizes</h2>
        <div className="flex gap-3 items-center flex-wrap">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Badge variants</h2>
        <div className="flex gap-3 flex-wrap">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Input</h2>
        <div className="max-w-sm space-y-2">
          <Input type="text" placeholder="Enter text..." />
          <Input type="email" placeholder="Email address" />
          <Input disabled placeholder="Disabled input" />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Card</h2>
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>This is a card description using muted foreground.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Card content goes here. Tokens drive all colors.</p>
          </CardContent>
          <CardFooter>
            <Button size="default">Action</Button>
          </CardFooter>
        </Card>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Avatar</h2>
        <div className="flex gap-4 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </div>
      </section>
    </div>
  )
}

export default App
