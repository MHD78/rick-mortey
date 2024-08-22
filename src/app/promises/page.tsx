"use client";

import React, { useState } from "react";

const Promises = () => {
  const [test, setTest] = useState<string[] | string>("loading");
  const [value, setValue] = useState<string>("");
  const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok 1");
      //   reject("failure");
    }, 2000);
  });
  const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok 2");
      //   reject("failure");
    }, 4000);
  });

  const final = Promise.all([promiseOne, promiseTwo]);
  final.then((res) => setTest(res as string[]));
  final.catch((err) => setTest(err));
  return (
    <div>
      {!Array.isArray(test) && (
        <span className="animate-pulse">loading...</span>
      )}
      -{JSON.stringify(test)}
      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="string"
        />
        <button
          className="bg-green-100 p-4 rounded"
          onClick={() =>
            fetch("/api/user", {
              method: "POST",
              body: JSON.stringify({ name: value }),
            })
          }
        >
          post
        </button>
      </div>
    </div>
  );
};

export default Promises;
