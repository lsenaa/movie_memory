import { useEffect, useRef, useState } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

interface IMapProps {
  address: string;
  addressDetail: string;
  isEdit: boolean;
}

export default function Map(props: IMapProps) {
  // const [kakaoMap, setKakaoMap] = useState(null);
  // const [infowindow, setInfoWindow] = useState(null);
  // const [kakaoMarker, setKakaoMarker] = useState(null);

  // const container = useRef(null);

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src =
  //     "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=7ec87cf57445b04e09f25391ef927a0c&libraries=services";
  //   document.head.appendChild(script);

  //   script.onload = () => {
  //     window.kakao.maps.load(() => {
  //       const center = new window.kakao.maps.LatLng(37.50802, 127.062835);
  //       const options = {
  //         center,
  //         level: 3,
  //       };

  //       const map = new window.kakao.maps.Map(container.current, options);

  //       const infowindow = new window.kakao.maps.InfoWindow({ zindex: 1 });
  //       const marker = new window.kakao.maps.Marker({
  //         map: map,
  //         position: center,
  //       });
  //       setKakaoMarker(marker);
  //       setInfoWindow(infowindow);
  //       setKakaoMap(map);
  //     });
  //   };
  // }, [container]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=a044e7409286dabd7b2821e8bdff0140&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");

        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        // 마커를 생성
        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });
        marker.setMap(map);

        // 주소-좌표 변환 객체 생성
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색
        geocoder.addressSearch(
          `${props.address} ${props.addressDetail}`,
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시
              const marker = new window.kakao.maps.Marker({
                map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시
              const infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">거래장소</div>',
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.address]);

  return (
    <>
      <div
        id="map"
        style={{ width: "100%", height: "100%", margin: "auto" }}
      ></div>
    </>
  );
}
