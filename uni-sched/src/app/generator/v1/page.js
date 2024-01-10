import { Button } from "@/components/shadcn/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/shadcn/ui/card"
import { Input } from "@/components/shadcn/ui/input"
  

export default function first() {
    return(
        <div className="flex flex-col items-center justify-center p-6">
            <h1 className="">Let's get the basics out of the way...</h1>
            <div className="flex flex-col items-center justify-center mt-4">
                <Card>
                    <CardHeader>
                        <CardTitle>The basics</CardTitle>
                        <CardDescription>All you need to get started</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Input type="text" placeholder="Project Name..." />
                    </CardContent>
                    <CardFooter>
                        <Button>Next</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}