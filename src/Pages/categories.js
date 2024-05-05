import { useParams } from "react-router-dom";

export default function CategoriesPage() {
  const params = useParams();

  return <h1> {params.category} </h1>;
}
