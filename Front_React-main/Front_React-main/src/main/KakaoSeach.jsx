import React, { useEffect, useState } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";

const NewsSearch = () => {
  const [query] = useState("빈산소");
  const [newsList, setNewsList] = useState([]);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      console.log("InView:", inView);
      setPage((prevPage) => prevPage + 1);
      setInView(false);
    }
  }, [inView]);

  const [isinView, setInView] = useState(true);

  useEffect(() => {
    if (isinView) {
      const searchNews = async () => {
        try {
          const response = await axios.get(
            "https://dapi.kakao.com/v2/search/blog",
            {
              params: {
                query: query,
                size: 50,
                page: page,
              },
              headers: {
                Authorization: "KakaoAK 47e75c5f17d7e5c3c53e60b8f2cefa4c",
              },
            }
          );

          const results = response.data.documents;
          setNewsList((prevList) => [...prevList, ...results]);
        } catch (error) {
          console.error("API 호출 에러:", error);
        }
      };

      console.log("Search News useEffect - page:", page);
      searchNews();
    }
  }, [query, page, isinView, setNewsList]);

  return (
    <div className="container">
      <div className="row">
        {newsList
          .filter((news) => news.thumbnail) // 이미지가 있는 결과만 필터링
          .map((news, index) => (
            <div key={index} className="col-md-12 mb-3">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={news.thumbnail}
                      className="card-img"
                      alt={news.title}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        {news.title.replace(/(<([^>]+)>)/gi, "")}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div ref={ref} style={{ height: "20px" }}></div>
    </div>
  );
};

export default NewsSearch;
