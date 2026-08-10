import { Icons } from "./Icons";
import { Button } from '../ui/button'

export const GoogleButton = () => {
//   const handleSocialLogin = (provider: "apple" | "google" | "github") => {
//     // Implement your social login logic here
//     console.log(`${provider} login clicked`);
//   };

  return (
    <div className="flex justify-center space-x-4">
      <Button
        variant="outline"
        className="border-gray-700 bg-gray-700 text-white hover:bg-gray-600 hover:text-gray-200"
        // onClick={() => handleSocialLogin("apple")}
      >
        <Icons.google className="h-4 w-4 text-gray-400" />
        Continue with Google
      </Button>
    </div>
  );
};
