import { useEffect } from "react";
import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="error">
      <div>404: cтраница не найдена</div>
      <Link to="/" relative="path">
        <p className="error_message">Вернуться на главную</p>
      </Link>
    </div>
  );
}
