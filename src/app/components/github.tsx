"use client"; // this is a client component 👈🏽
import axios from "axios";
import { useEffect, useState } from "react";

const token = "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";

function Github() {
  const [repositories, setRepositories] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Momessito/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  useEffect(() => {

  const getLanguagesUrl = (repoName: string) => {
    return `https://api.github.com/repos/Momessito/${repoName}/languages`;
  };
}, []);

  useEffect(() => {
    if (repositories.length > 0) {
      const updatedRepositories = repositories.map((repo) => {
        return axios
          .get(getLanguagesUrl(repo.name), {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then((response) => {
            const data = response.data;
            // retorna um novo objeto com os dados atualizados
            return { ...repo, languages: data };
          })
          .catch((error) => {
            console.error(error);
            return repo;
          });
      });

      // atualiza o estado do componente com o novo array de repositórios
      Promise.all(updatedRepositories).then((data) => {
        setRepositories(data);
      });
    }
  }, [repositories]);

  return (
    <div>
      <ul id="Mais2">
        {Array.isArray(repositories) &&
          repositories.map((repository) => {
            return (
              <li className="Card" key={repository.id}>
                <h3>{repository.name}</h3>
                <p>{repository.description}</p>
                {repository.languages && (
                  <p className="languages">
                    {Object.keys(repository.languages).map((language) => {
                      return (
                        <span key={language} className="language">
                          {language}
                        </span>
                      );
                    })}
                  </p>
                )}
                <a href={repository.html_url}>Visitar</a>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Github;
