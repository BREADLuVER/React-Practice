const COUNTER_API_URL = "http://localhost:3000/count";

const updateCountAPI = async (newCount) => {
  try {
    await fetch(COUNTER_API_URL, {
      method: "PUT", // Replaces the entire "count" object
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: newCount }), // Matches db.json structure
    });
    console.log(`Updated count to ${newCount}`);
  } catch (error) {
    console.error("Error updating count:", error);
  }
};

updateCountAPI(10);