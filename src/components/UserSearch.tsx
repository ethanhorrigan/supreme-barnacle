import axios from 'axios';
import { useEffect, useState } from 'react';

import { TTAIO_HOSTNAME } from './api/Constants';

export default function UserSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResults] = useState<any[]>([]);

  useEffect(() => {
    const url = `${TTAIO_HOSTNAME}/search/user?query=${searchQuery}`;
    const headers = {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': 'a95634e82cmshc9d9f478728c886p14c5f5jsn5725ed7973e3',
      'X-RapidAPI-Host': 'tiktok-all-in-one.p.rapidapi.com'
    };

    if (searchQuery.length == 0 || searchQuery.length < 2) {
      setResults([]);

      return;
    }
    axios
      .get(url, { headers })
      .then((response) => {
        return setResults(response.data.user_list);
      })
      .catch(() => null);
  }, [searchQuery]);

  return (
    <div className="flex flex-col items-center justify-center gap-7 text-center text-blue-100">
      <input placeholder="Username" onChange={(event) => setSearchQuery(event.target.value)} />
      {result.map((item, index) => {
        if (
          searchQuery &&
          Object.keys(item).length > 0 &&
          Object.keys(item).includes('user_info')
        ) {
          return (
            <div>
              <p>
                {index + 1} {item.user_info.nickname} {item.user_info.follower_count}
              </p>
            </div>
          );
        }
      })}
    </div>
  );
}
