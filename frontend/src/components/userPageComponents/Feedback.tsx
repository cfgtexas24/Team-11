import * as React from "react";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa"; // Importing star icon from react-icons
import '../../App.css';

function Feedback() {
  const [rating, setRating] = React.useState(0); // To store the selected rating
  const [submitted, setSubmitted] = React.useState(false); // To track submission state
  const [message, setMessage] = React.useState("");

  // Function to handle star click
  const handleRatingClick = (value: number) => {
    setRating(value);
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform any submission logic here, such as sending feedback to the server
    
    // After submission, show the feedback message
    setSubmitted(true);
    setMessage("Feedback sent!")
  };

  return (
    <>
      <div className="justify-around rounded-lg shadow-md h-full p-4" style={{ backgroundColor: '#F0DCDA' }}>
        <div className="flex flex-row">
          <div className="text-left pb-3 pt-3">
            <h1 className="text-2xl mb-2 font-bold">Feedback</h1>
            <div>
              {/* If feedback is submitted, show the success message */}
              {submitted ? (
                <p className="text-green-600 font-bold">Feedback sent!</p>
              ) : (
                <form onSubmit={handleSubmit}>
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

                  {/* Comments Input */}
                  <div className="mb-4 pb-3">
                    <p className="text-left pb-3">Leave us comments!</p>
                    <textarea
                      id="comments"
                      name="comments"
                      placeholder="Comments"
                      className="border w-64 h-52 p-2 rounded-md shadow-md resize-none break-words whitespace-normal"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <Button type="submit" className="bg-[#3A696E] w-32 mt-8">
                      Submit
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
