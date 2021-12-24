import { Card } from "../../components/Card";
import { Navbar } from "../../components/Navbar";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { colors } from "../../hooks/useColors";
import { ContainerCard } from "./styles";

export function Favorites() {
    return (
        <>
            <Navbar />
            <ContainerCard>
                {/* <Card cardColor={colors.primary} colorText={colors.grey500} />
                <Card cardColor={colors.danger} colorText={colors.white} /> */}
            </ContainerCard>
            <ThemeSwitcher />
        </>
    );
}