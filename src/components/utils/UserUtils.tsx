import { VERIFIED } from './UtilConstants';

function isVerified(accountStatus: string) {
  return accountStatus === VERIFIED;
}

function validQuery(query: string) {
  return query !== '';
}

export function getAccountVerificationStatus(accountStatus: string) {
  if (isVerified(accountStatus)) {
    return true;
  }

  return false;
}

export function compareNicknameQuery(nickname: string, query: string) {
  if (validQuery(query)) {
    if (nickname.toLowerCase().includes(query.toLowerCase())) {
      return nickname;
    }
  }

  return undefined;
}

export function formatFollowerCount(followerCount: number) {
  return Math.abs(Number(followerCount)) >= 1.0e9
    ? `${(Math.abs(Number(followerCount)) / 1.0e9).toFixed(2)}B`
    : Math.abs(Number(followerCount)) >= 1.0e6
    ? `${(Math.abs(Number(followerCount)) / 1.0e6).toFixed(2)}M`
    : Math.abs(Number(followerCount)) >= 1.0e3
    ? `${(Math.abs(Number(followerCount)) / 1.0e3).toFixed(2)}K`
    : Math.abs(Number(followerCount));
}
