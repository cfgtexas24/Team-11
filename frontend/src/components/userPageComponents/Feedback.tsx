import * as React from "react";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";  // Importing star icon from react-icons
import '../../App.css'

function Feedback() {
  const [rating, setRating] = React.useState(0); // To store the selected rating

  // Function to handle star click
  const handleRatingClick = (value: number) => {
    setRating(value);
  };

  return (
    <>
      <div className="justify-around rounded-lg shadow-md h-100 p-4" style={{ backgroundColor: '#F0DCDA' }}>
        <div className="flex flex-row">
          <div className="text-left pb-3 pt-3">
            <h1 className="text-2xl mb-2 font-bold">Feedback</h1>
            <div>
              <form>
                {/* Star Rating Input */}
                <div className="mb-4 pb-3 pt-3">
                  <p className="text-left">Give us a rating!</p>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <FaStar
                        key={value}
                        size={24}
                        className={`cursor-pointer ${
                          value <= rating ? "text-yellow-500" : "text-gray-300"
                        }`}
                        onClick={() => handleRatingClick(value)} // Set rating on star click
                      />
                    ))}
                  </div>
                </div>

                 {/* Comments Input with Text Wrapping */}
                 <div className="mb-4 pb-3">
                  <p className="text-left pb-3">Leave us comments!</p>
                  <textarea
                    id="comments"
                    name="comments"
                    placeholder="Comments"
                    className="border w-60 h-32 p-2 rounded-md shadow-md resize-none break-words whitespace-normal" // Added text wrapping
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <Button type="submit" className="bg-[#3A696E] w-32 mt-8">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
