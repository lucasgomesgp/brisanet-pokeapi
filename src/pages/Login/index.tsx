import { useState } from "react";
import { FormEvent, useContext } from "react";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { AuthContext } from "../../hooks/contexts/AuthContext";
import {
    Container,
    Content,
    Image,
    Title,
    Form,
    Input,
    Button,
    BgPokemons,
} from "./styles";

interface User {
    email?: string;
    password?: string;
}

export function Login() {
    const { signIn } = useContext(AuthContext);
    const [userSignIn, setUserSignIn] = useState<User>({});

    function handleLogin(event: FormEvent) {
        event.preventDefault();
        signIn(userSignIn);
    }

    return (
        <Container>
            <Content>
                <Image src="/assets/logoLight.png" alt="Logo do Pokémon" />
                <Title>Comece a coletar pokémons!</Title>
                <Form onSubmit={handleLogin}>
                    <Input
                        type="email"
                        placeholder="Email"
                        value={userSignIn?.email}
                        onChange={(event) => setUserSignIn({ email: event.target.value })}
                    />
                    <Input
                        type="password"
                        placeholder="Senha"
                        value={userSignIn?.password}
                        onChange={(event) => setUserSignIn({ password: event.target.value })}
                    />
                    <Button>Entrar</Button>
                </Form>
            </Content>
            <BgPokemons />
            <ThemeSwitcher />
        </Container>
    );
}
