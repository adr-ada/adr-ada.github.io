import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Card,
    // CardContent,
    // CardDescription,
    // CardFooter,
    // CardHeader,
    // CardTitle,
} from "@/components/ui/card"

const MainBody = () => {
    const education = [
        { id: 1, name: "Simon Fraser University", location: "Burnaby", major: "Computing Science", dates: "January 2024 - Present", bonus: "" },
        { id: 2, name: "Kwantlen Polytechnic University", location: "Surrey", major: "Undeclared Business Major", dates: "January 2023 - December 2023", bonus: "3.98 GPA" },
    ];
    return (
        <>
            <div className="flex flex-col items-start ml-[33%] py-10">
                <h1 className="text-3xl font-bold">
                    About Me
                </h1>
                <p className="max-w-2xl text-left">Hi, I am a third-year student at Simon Fraser University majoring in Computing Science.</p>
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
                <div className="max-w-2xl text-left">
                    {education.map((educ) => (
                        <>
                            <p className="text-sm text-neutral-500 dark:text-neutral-300 pt-6">{educ.dates}</p>
                            <p><span className="font-bold">{educ.name}, {educ.location}</span> - {educ.major}</p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-300">{educ.bonus}</p>
                        </>
                    ))}
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-bold">
                    Projects at a glance
                </h1>
                <Carousel className="w-full max-w-xl mx-auto px-10">
                    <CarouselContent>
                        <CarouselItem><Card>1</Card></CarouselItem>
                        <CarouselItem><Card>1</Card></CarouselItem>
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