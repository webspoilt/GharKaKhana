# GharKaKhana

**GharKaKhana** is a comprehensive platform connecting home chefs with food lovers, bringing the warmth and taste of homemade meals to your doorstep. It empowers home cooks to share their culinary creations while providing customers with healthy, hygienic, and authentic home-cooked food options.

## 🌟 Features

*   **For Users:**
    *   Browse a wide variety of homemade dishes nearby.
    *   Order healthy and hygienic food with ease.
    *   Real-time order tracking.
    *   Personalized recommendations.

*   **For Home Chefs:**
    *   Create and manage your digital kitchen.
    *   Showcase your menu with mouth-watering photos.
    *   Manage orders and track earnings.
    *   Grow your culinary business from home.

## 🛠️ Tech Stack

Built with a modern, high-performance stack:

*   **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
*   **Database:** [PostgreSQL](https://www.postgresql.org/) (via [Prisma ORM](https://www.prisma.io/))
*   **Authentication:** [NextAuth.js](https://next-auth.js.org/)
*   **State Management:** [Zustand](https://github.com/pmndrs/zustand)

## 🚀 Getting Started

### Prerequisites

*   Node.js 18+ or Bun
*   PostgreSQL database

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/zeroday/gharkakhana.git
    cd gharkakhana
    ```

2.  Install dependencies:
    ```bash
    bun install
    # or
    npm install
    ```

3.  Set up environment variables:
    Copy `.env.example` to `.env` and fill in your database credentials and other secrets.
    ```bash
    cp .env.example .env
    ```

4.  Run database migrations:
    ```bash
    bun run db:migrate
    ```

5.  Start the development server:
    ```bash
    bun run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the generic MIT License.

## ✍️ Author

**zeroday**
