import { Text } from "../../components/Text/Text";
export default function HH(){
    return (
        <main>
            <Text>Это означает, что вы используете собственный исходный код в неизмененном / несвязанном состоянии, что приводит к следующей ошибке: Uncaught SyntaxError: Cannot use import statement outside a module, Вы можете решить эту проблему, создав файл сценария и импортировав его.</Text>
        </main>
    );
}