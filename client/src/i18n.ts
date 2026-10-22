import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        languageButton: "JP",
        mangaButton: "Manga",
        switchLanguage: "Switch to Japanese",
        resume: "Resume"
      },
      hero: {
        label: "Open to frontend and full-stack roles",
        title: "Portfolio",
        name: "Kshitish Kumar Panda",
        role: "Full-Stack Developer & UI Architect",
        cards: {
          frontend: "Frontend",
          backend: "Backend",
          devops: "DevOps"
        },
        cta: "View Case Studies",
        resume: "Download Resume",
      },
      about: {
        title: "About",
        intro:
          "I build expressive, responsive web experiences with React, TypeScript, Tailwind CSS, Node.js, and clean API architecture. This portfolio is designed to feel bold and memorable while still making projects, skills, and contact details easy to scan.",
        detail:
          "My focus is the space where strong frontend craft meets practical backend systems: polished interfaces, reliable APIs, and deployment flows that make the whole product feel complete.",
        highlights: ["React UI", "Typed Components", "Node APIs", "Deployment Flow"],
        lookingFor:
          "Currently looking for frontend, full-stack, and internship opportunities where I can contribute to polished user-facing products."
      },
      sections: {
        skills: "Skills",
        works: "Works",
        contact: "Contact",
        capabilities: "What I Build"
      },
      projects: {
        all: "All"
      },
      contact: {
        eyebrow: "Open to work",
        title: "Let us build something sharp.",
        description:
          "Send a message about a role, internship, freelance project, collaboration, or feedback on this portfolio.",
        fields: {
          name: "Name",
          email: "Email",
          subject: "Subject",
          message: "Message"
        },
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully.",
        error: "Could not send message yet. You can still reach me by email."
      }
    }
  },
  ja: {
    translation: {
      nav: {
        languageButton: "EN",
        mangaButton: "マンガ",
        switchLanguage: "英語に切り替え",
        resume: "履歴書"
      },
      hero: {
        label: "フロントエンド・フルスタック職を探しています",
        title: "ポートフォリオ",
        name: "クシティッシュ クマール パンダ",
        role: "フルスタック開発者 & UIアーキテクト",
        cards: {
          frontend: "フロントエンド",
          backend: "バックエンド",
          devops: "DevOps"
        },
        cta: "事例を見る",
        resume: "履歴書をダウンロード",
      },
      about: {
        title: "自己紹介",
        intro:
          "React、TypeScript、Tailwind CSS、Node.js、整理されたAPI設計で、表現力のあるレスポンシブなWeb体験を作ります。",
        detail:
          "丁寧なフロントエンド設計と実用的なバックエンドをつなぎ、完成度の高いプロダクトにすることが得意です。",
        highlights: ["React UI", "型付きコンポーネント", "Node API", "デプロイ設計"],
        lookingFor:
          "現在、フロントエンド、フルスタック、インターンの機会を探しています。"
      },
      sections: {
        skills: "スキル",
        works: "制作事例",
        contact: "連絡",
        capabilities: "作れるもの"
      },
      projects: {
        all: "すべて"
      },
      contact: {
        eyebrow: "仕事を探しています",
        title: "印象に残るものを作りましょう。",
        description:
          "仕事、インターン、フリーランス案件、コラボレーション、またはポートフォリオへの感想を送ってください。",
        fields: {
          name: "名前",
          email: "メール",
          subject: "件名",
          message: "メッセージ"
        },
        send: "送信",
        sending: "送信中...",
        success: "メッセージを送信しました。",
        error: "送信できませんでした。メールでも連絡できます。"
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
