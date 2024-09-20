'use client';

import axios, { endpoints } from 'src/utils/axios';

import { setSession } from './utils';
import { STORAGE_KEY, STORAGE_USER_ID } from './constant';
import { CONFIG } from 'src/config-global';

/** **************************************
 * Sign in
 *************************************** */
export const signInWithPassword = async ({ email, password }) => {
  try {
    const params = {       
      client_id: CONFIG.serverApi.ClientId,
      grant_type: CONFIG.serverApi.GrantType,
      username: email,
      password: password,
      scope: CONFIG.serverApi.Scope
    };

    const res = await axios.post(endpoints.auth.signIn, params, 
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    const accessToken = res.data.access_token;

    if (!accessToken) {
      throw new Error('Access token not found in response');
    }

    setSession(accessToken, email);
  } catch (error) {
    console.error('Error during sign in:', error);
    throw error;
  }
};

/** **************************************
 * Sign up
 *************************************** */
export const signUp = async ({ email, password, firstName, lastName }) => {
  const params = {
    email,
    password,
    firstName,
    lastName,
  };

  try {
    const res = await axios.post(endpoints.auth.signUp, params);

    const { accessToken } = res.data;

    if (!accessToken) {
      throw new Error('Access token not found in response');
    }

    sessionStorage.setItem(STORAGE_KEY, accessToken);
    sessionStorage.setItem(STORAGE_USER_ID, email);
  } catch (error) {
    console.error('Error during sign up:', error);
    throw error;
  }
};

/** **************************************
 * Sign out
 *************************************** */
export const signOut = async () => {
  try {
    await setSession(null, null);
  } catch (error) {
    console.error('Error during sign out:', error);
    throw error;
  }
};
