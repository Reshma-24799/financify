import DashboardBox from "@/components/DashboardBox"
import { useGetKpisQuery } from "@/state/api";

const Row1 = () => {
  const { data } = useGetKpisQuery();

  return (
    <>
        <DashboardBox  bgcolor="#fff" gridArea="a"></DashboardBox>
        <DashboardBox  bgcolor="#fff" gridArea="b"></DashboardBox>
        <DashboardBox  bgcolor="#fff" gridArea="c"></DashboardBox>
    </>
  )
}

export default Row1
