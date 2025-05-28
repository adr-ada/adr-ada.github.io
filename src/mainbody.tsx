import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const MainBody = () => {

    return (
        <>
            <div className="flex flex-col items-start ml-[33%]">
                <h1 className="text-3xl font-bold">
                    About Me
                </h1>
                <p className="max-w-2xl text-left">Hi, I am a third-year student at Simon Fraser University majoring in Computing Science. testest estestest etestet tests</p>
                {/* <Card className="w-[700px] h-20">
                    <CardHeader>
                        <CardTitle>About Me</CardTitle>
                    </CardHeader>
                    <CardContent>hi</CardContent>
                </Card> */}
            </div>
            <div className="flex flex-col items-start ml-[33%]">
                <h1 className="text-3xl font-bold">
                    Education
                </h1>
                <div className="max-w-2xl text-left"></div>
                <p className="">test</p>
            </div>
            <div>
                <h1 className="text-3xl font-bold">
                    Projects at a glance
                </h1>
                <Carousel className="w-full max-w-xl mx-auto px-10">
                    <CarouselContent>
                        <CarouselItem ><Card>1</Card></CarouselItem>
                        <CarouselItem><Card className="h-50" >1</Card></CarouselItem>
                        <CarouselItem><Card>1</Card></CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </>
    )
}
export default MainBody