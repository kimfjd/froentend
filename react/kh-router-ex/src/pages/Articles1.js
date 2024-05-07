import { useParams } from "react-router-dom";

const Articles1 = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>게시글 {id}</h2>
    </div>
  );
};
export default Articles1;
