import { useParams } from "react-router-dom";

export default function SubCategoriesPage() {
  const params = useParams();

  return <h1> {params.subCategory} </h1>;
}
