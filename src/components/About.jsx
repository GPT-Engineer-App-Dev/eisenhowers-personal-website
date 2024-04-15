import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card.jsx";

export function About() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>About Us</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is the about page content.</p>
      </CardContent>
    </Card>
  );
}