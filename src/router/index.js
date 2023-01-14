import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "Routenplanung",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/mytickets",
      name: "Meine Tickets",
      component: () => import("../views/MyTicketsView.vue"),
    },
    {
      path: "/trip?time=:time&dep=:dep&dest=:dest",
      name: "Reiseplanung",
      props: true,
      component: () => import("../views/TripView.vue"),
    },
    {
      path: "/register",
      name: "Registrierung",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/createprofile",
      name: "Profil erstellen",
      component: () => import("../views/CreateProfileView.vue"),
    },
    {
      path: "/tickets",
      name: "Tickets",
      component: () => import("../views/TicketView.vue"),
    },
    {
      path: "/booking?name=:name&price=:price",
      name: "Ticket Buchen",
      props: true,
      component: () => import("../views/BookingView.vue"),
    },
    {
      path: "/history",
      name: "Verlauf",
      component: () => import("../views/HistoryView.vue"),
    },
    {
      path: "/favourites",
      name: "Favoriten",
      component: () => import("../views/FavouritesView.vue"),
    },
    {
      path: "/settings",
      name: "Einstellungen",
      component: () => import("../views/SettingsView.vue"),
    },
  ],
});

export default router;
