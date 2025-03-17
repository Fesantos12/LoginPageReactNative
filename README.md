# 🔐 Login Page com React Native

Este projeto é uma **página de login** desenvolvida com **React Native**, utilizando **TypeScript** e **Expo Router** para gerenciar a navegação entre as telas de **Login**, **Registro** e **Página Inicial**.

## 🚀 Tecnologias Utilizadas

- ⚛️ **React Native** - Framework para desenvolvimento mobile
- 💙 **TypeScript** - Tipagem estática para um código mais seguro
- 🏗️ **Expo Router** - Facilita a navegação entre telas no Expo

## 📸 Capturas de Tela

![Login Page Screenshot](image.png)

## 📂 Estrutura do Projeto

```
📂 src
 ├── 📂 app
 │   ├── 📜 index.tsx  # Página Inicial
 │   ├── 📜 login.tsx  # Tela de Login
 │   ├── 📜 register.tsx  # Tela de Registro
 │   ├── 📜 _layout.tsx  # Configuração do Expo Router
 ├── 📂 components
 │   ├── 📜 Button.tsx  # Componente de Botão reutilizável
 │   ├── 📜 Input.tsx  # Campo de entrada de texto
 ├── 📂 assets  # Ícones, imagens e fontes
 ├── 📜 app.json  # Configuração do Expo
 ├── 📜 package.json  # Dependências do projeto
```

## 🛠️ Como Rodar o Projeto

1. **Clone o repositório**
```sh
  git clone https://github.com/seu-usuario/nome-do-repositorio.git
```
2. **Acesse a pasta do projeto**
```sh
  cd nome-do-repositorio
```
3. **Instale as dependências**
```sh
  npm install  # ou yarn install
```
4. **Execute o projeto**
```sh
  expo start
```

## 🔄 Navegação entre Telas

A navegação é feita utilizando **Expo Router**, permitindo acessar as seguintes páginas:
- `/` ➡️ Página Inicial 🏠
- `/login` ➡️ Tela de Login 🔑
- `/register` ➡️ Tela de Cadastro 📝

## 🎨 Customização

- Você pode editar os estilos dentro da pasta `styles/` para personalizar o layout conforme sua necessidade.
- Modifique os componentes em `src/components/` para reutilização e melhor organização.

## 🔄 Atualização

- 🔑 **Sistema de Login e Autenticação**: Adicionado suporte ao **Clerk** para autenticação de usuários.
- 📱 **Integração com Expo Router**: O sistema de login foi totalmente integrado ao fluxo de navegação.

## 🤝 Contribuição

Sinta-se à vontade para contribuir com melhorias! Basta abrir um **pull request** ou relatar um **issue**.

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usá-lo e modificá-lo! 😊

---

# 🔐 Login Page with React Native

This project is a **login page** developed with **React Native**, using **TypeScript** and **Expo Router** to manage navigation between **Login**, **Register**, and **Home Page** screens.

## 🚀 Technologies Used

- ⚛️ **React Native** - Mobile development framework
- 💙 **TypeScript** - Static typing for safer code
- 🏗️ **Expo Router** - Simplifies screen navigation in Expo

## 📸 Screenshots

![Login Page Screenshot](image.png)

## 📂 Project Structure

```
📂 src
 ├── 📂 app
 │   ├── 📜 index.tsx  # Home Page
 │   ├── 📜 login.tsx  # Login Screen
 │   ├── 📜 register.tsx  # Register Screen
 │   ├── 📜 _layout.tsx  # Expo Router Configuration
 ├── 📂 components
 │   ├── 📜 Button.tsx  # Reusable Button Component
 │   ├── 📜 Input.tsx  # Text Input Field
 ├── 📂 assets  # Icons, images, and fonts
 ├── 📜 app.json  # Expo Configuration
 ├── 📜 package.json  # Project Dependencies
```

## 🛠️ How to Run the Project

1. **Clone the repository**
```sh
  git clone https://github.com/your-username/repository-name.git
```
2. **Go to the project folder**
```sh
  cd repository-name
```
3. **Install dependencies**
```sh
  npm install  # or yarn install
```
4. **Run the project**
```sh
  expo start
```

## 🔄 Navigation Between Screens

Navigation is handled using **Expo Router**, allowing access to the following pages:
- `/` ➡️ Home Page 🏠
- `/login` ➡️ Login Screen 🔑
- `/register` ➡️ Register Screen 📝

## 🎨 Customization

- You can edit the styles inside the `styles/` folder to customize the layout as needed.
- Modify the components in `src/components/` for reusability and better organization.

## 🔄 Update

- 🔑 **Login & Authentication System**: Added support for **Clerk** user authentication.
- 📱 **Integration with Expo Router**: The login system is now fully integrated into the navigation flow.

## 🤝 Contribution

Feel free to contribute with improvements! Just open a **pull request** or report an **issue**.

## 📄 License

This project is under the MIT license. Feel free to use and modify it! 😊

