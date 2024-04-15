import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card.jsx";

export function Home() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Welcome to the Home Page</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is the home page content.</p>
      </CardContent>
    </Card>
  );
}