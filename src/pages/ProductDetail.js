import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAddProduct from "../hooks/GetSimilarproduct";

function ProductDetail() {
  const data = useParams();
  const { GetSimilarproduct, data2, error2, loading2 } = useAddProduct();

  useEffect(() => {
    GetSimilarproduct(`${data.productId}`);
    console.log("data2", data2);
  }, []);
  console.log(data);
  if (loading2) return <div>Loadinnng2 .....</div>
  else
  return (
    <div className="flex  sm:w-[50%] w-[100%]">
      <div withBorder>
        <div className="card mx-auto w-[90%] my-10 bg-base-100 shadow-xl">
          <div className="card-body">
            Hello from Product Detail number {`${data?.productId}`}
            <br />
            {console.log("dataaaa2",data2?.images?.[1])}
            {data2?.title}
            {data2?.description}
            <img
              src={data2?.images?.[0] || data2?.images?.[1] || data2?.images?.[2] || ''}
              alt=""
            />
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => {
                  // navig(`/products/${id}`);
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
