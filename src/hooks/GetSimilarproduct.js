import { useState } from "react";

function useAddProduct() {
  const [data2, setData2] = useState(undefined);
  const [loading2, setLoading2] = useState(false);
  const [error2, setError2] = useState(undefined);
  function GetSimilarproduct(id) {
    console.log("My id from useadd", id);
    setLoading2(true);
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        setLoading2(false);
        console.log("This is my getplatzii:", json);
        setData2(json);
      })
      .catch((er2) => {
        console.log("errorrr");
        setError2(er2);
      });
  }
  return { GetSimilarproduct, data2, error2, loading2 };
}

export default useAddProduct;
