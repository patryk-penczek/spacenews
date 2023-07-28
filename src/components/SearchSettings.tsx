import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getAllArticles,
  getAllInfo,
  getSearchedNewsSites,
} from '../../api/api';
import Select from 'react-select';
import { darkInput } from '@/styles/darkInput';
import { lightInput } from '@/styles/lightInput';
import { useTheme } from 'contexts/ThemeContext';

type Props = {
  isOpen: boolean;
  setArticles: Dispatch<SetStateAction<ArticlesData>>;
};

const SearchSettings = ({ isOpen, setArticles }: Props): ReactElement => {
  const [info, setInfo] = useState<InfoData | undefined>();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const infoMap = info?.news_sites;
  const loadingLength = infoMap !== undefined ? infoMap.length : 35;

  const searchByNewsSite = (news_site: string | null) => {
    navigate('/');
    if (news_site) {
      getSearchedNewsSites(news_site).then((data) => setArticles(data));
    }
  };

  useEffect(() => {
    getAllInfo().then((data: InfoData) => setInfo(data));
  }, [theme]);

  return (
    <div
      className={`${
        isOpen === true ? 'not-sr-only mt-4 duration-300' : 'sr-only'
      }`}
    >
      <div className="flex flex-col md:flex-row">
        <Select
          options={
            Array.isArray(infoMap) && infoMap.length > 0
              ? infoMap.map((result) => ({
                  value: result,
                  label: result,
                }))
              : Array.from({ length: loadingLength }).map((_, index) => ({
                  value: `Loading ${index}`,
                  label: 'Loading',
                }))
          }
          onChange={(selectedOption, triggeredAction) => {
            searchByNewsSite(selectedOption && selectedOption.value);
            if (triggeredAction.action === 'clear') {
              getAllArticles().then((data) => setArticles(data));
            }
          }}
          isClearable
          placeholder="Choose a news site"
          className="sm:min-w-70"
          styles={theme === 'dark' ? darkInput : lightInput}
        />
      </div>
    </div>
  );
};

export default SearchSettings;
