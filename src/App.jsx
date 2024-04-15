import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card.jsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.jsx";
import { Button } from "@/components/ui/button.jsx";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto">
      <Card className="mt-8">
        <CardHeader>
          <Avatar className="mr-4">
            <AvatarImage src="/dwight-eisenhower.jpg" />
            <AvatarFallback>DE</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>Dwight D. Eisenhower</CardTitle>
            <p className="text-sm text-muted-foreground">34th President of the United States</p>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="bio" className="w-full">
            <TabsList>
              <TabsTrigger value="bio">Biography</TabsTrigger>
              <TabsTrigger value="presidency">Presidency</TabsTrigger>
              <TabsTrigger value="legacy">Legacy</TabsTrigger>
            </TabsList>
            <TabsContent value="bio" className="mt-4">
              <p>Dwight David Eisenhower (October 14, 1890 – March 28, 1969) was an American military officer and statesman who served as the 34th president of the United States from 1953 to 1961.</p>
            </TabsContent>
            <TabsContent value="presidency" className="mt-4">
              <p>During his presidency, Eisenhower launched programs that directly led to the development of the Interstate Highway System, the launch of the internet (DARPA), NASA and the peaceful use of alternative energy sources (Atomic Energy Act).</p>
            </TabsContent>
            <TabsContent value="legacy" className="mt-4">
              <p>Eisenhower ranks highly among historical rankings of U.S. presidents. His largest accomplishments include managing Cold War-era tensions with the Soviet Union, launching the Interstate Highway System, and championing the phrase "Under God" in the Pledge of Allegiance.</p>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
