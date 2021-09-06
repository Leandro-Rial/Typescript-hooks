import { useState, useEffect, useMemo } from "react";

export interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}

const useFetchData = (
  url: string
): {
  data: Beverage[] | null;
  done: boolean;
} => {
  const [data, setDate] = useState<Beverage[] | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((d: Beverage[]) => {
        setDate(d);
        setDone(true);
      });
  }, [url]);

  return {
    data,
    done,
  };
};

const CustomHookComponent = () => {
  const { data } = useFetchData("/hv-taplist.json");
  const portLandTaps = useMemo(() => 
      (data || []).filter(bev => bev.producerLocation.includes("Portland")), [data]
  )

  return <div>{portLandTaps.length && <img src={portLandTaps![1].logo} alt="Beverage logo" />}</div>;
};

export default CustomHookComponent;
