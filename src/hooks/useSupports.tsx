import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Support {
  id: number;
  name: string;
  course: string;
  classroom: string;
  date_support: string;
  status: string;
  id_response: string;
  id_user: string;
  support: string;
}

interface SupportsProviderProps {
  children: ReactNode;
}

type SupportClose = Pick<Support, 'id' | 'id_response'>;

interface SupportsContextData {
  supports: Support[];
  closeSupport: (support: SupportClose) => Promise<void>;
}

export const SupportsContext = createContext<SupportsContextData>(
  {} as SupportsContextData
);

export function SupportsProvider({ children }: SupportsProviderProps) {
  const [supports, setSupports] = useState<Support[]>([]);

  useEffect(() => {
    api.get('/supports')
      .then(response => setSupports(response.data));
  }, []);

  async function closeSupport(support: SupportClose) {
    const { id, id_response } = support;
    console.log(id_response);
    const res = await api.get("/supports/finish", {
      headers: {
        idresponse: id_response
      },
    })


    if (res.status === 200) {
      setSupports(
        supports.map(support => (support.id === id ? { ...support, status: "2" } : support))
      )
    }
  }

  return (
    <SupportsContext.Provider value={{ supports, closeSupport }}>
      {children}
    </SupportsContext.Provider>
  );
}

export function useSupports() {
  const context = useContext(SupportsContext);

  return context
}