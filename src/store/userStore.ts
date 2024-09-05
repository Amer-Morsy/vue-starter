import { Module } from 'vuex';


// Define the interface for the state
interface Student {
  address: string;
  name: string;
  birth_date: string;
  national_id: Number;
}
interface UserProfile {
  id: Number;
  first_name: string;
  last_name: string;
  category_name: string;
  city_name: string;
  email: string;
  phone: string;
  profile_photo_url: string;
  country_name: string;
  national_id: Number;
  address: string;
  students: Student[];

}


interface State {
  loginStatus: boolean;
  userData: any | null;
  userProfile: UserProfile | null;
}

export const userModule: Module<State, any> = {
  state: {
    loginStatus: false,
    userData: null,
    userProfile: null,
  },
  getters: {
    getLoginStatus: (state) => state.loginStatus,
    getUserData: (state) => state.userData,
    getUserProfile: (state) => state.userProfile,
  },
  mutations: {
    setLoginStatus(state, loginStatus) {
      state.loginStatus = loginStatus;
    },
    setUserData(state, userData) {
      state.userData = userData;
    },
    setUserProfile(state, userProfile) {
      state.userProfile = userProfile;
    },
    resetUserProfile(state) {
      state.userProfile = null;
    },
  },
  actions: {
    saveLoginStatus({ commit }, loginStatus) {
      commit('setLoginStatus', loginStatus);
    },
    saveUserData({ commit, dispatch }, userData) {
      commit('setUserData', userData);
      dispatch('saveUserProfile', userData);
    },
    saveUserProfile({ commit }, userData) {
      if (userData) {
        const userProfile = {
          id: userData.id,
          first_name: userData.first_name,
          last_name: userData.last_name,
          email: userData.email,
          phone: userData.phone,
          profile_photo_url: userData.profile_photo_url,
          country_name: userData.country.country_name,
          national_id: userData.profile.national_id,
          city_name: userData.profile.city_name,
          address: userData.profile.address,
          students: userData.profile.students,
          category_name: userData.profile.category.category_name,

        }
        commit('setUserProfile', userProfile);
      } else {
        commit('resetUserProfile');
      }
    },
  },
};

