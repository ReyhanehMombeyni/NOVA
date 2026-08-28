import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { RatingStars } from "./RatingStars";

interface CommentType {
    id?: number;
    userName: string;
    message: string;
    rate: number;
}

export const CommentCard = ({ userName, message, rate }: CommentType) => {
    return (
        <div>
            <Card className="mx-auto w-full min-w-3xs md:min-w-2xs">
                <CardHeader>
                    <CardTitle>{ userName }</CardTitle>
                    <CardDescription>
                        <RatingStars rating={ rate } />
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-xs md:text-sm">{ message }</p>
                </CardContent>
            </Card>
        </div>
    );
}
