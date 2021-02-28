import { User } from "../../models/interfaces/dashboard";

export const getAvatarPictureURL = (user: any): User => ({
  displayName: user.displayName,
  photoURL: (
    user.providerData[0].providerId === 'facebook.com'
      ? localStorage.getItem(process.env.NEXT_PUBLIC_LS_PICTURE_KEY)
      : user.photoURL
  ),
});