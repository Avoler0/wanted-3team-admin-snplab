import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import SearchBar from '../components/SearchBar';
import ApplicantsList from '../components/ApplicantsList';
import ExcelDownloadButton from '../components/ExcelDownloadButton';
import useRegister from '../hooks/useRegister';
import { SearchQueryType } from '../interfaces/types';

export default function ApplyStatus() {
  const [query, setQuery] = useState<SearchQueryType>();
  const { applicants, getApplicants, updateApplicants, applyLoading } = useRegister();

  const updateApplicantData = (id: number, isAccepted: boolean) => {
    updateApplicants(id, isAccepted);
    getApplicants(query);
  };

  useEffect(() => {
    getApplicants(query);
  }, [query]);

  return (
    <Container>
      <Header>
        <h1>메인</h1>
      </Header>
      <Main>
        <LeftSection />
        <RightSection>
          <PageTitle className="contents_title">AI 학습용 교통 데이터 수집을 위한 크라우드 워커 지원 현황</PageTitle>
          <FunctionalityContainer>
            <SearchBar
              setQuery={(_query: SearchQueryType) => {
                setQuery(_query);
              }}
            />
          </FunctionalityContainer>
          <ApplicantsList data={applicants} isLoading={applyLoading} updateApplicantData={updateApplicantData} />
        </RightSection>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  font-family: 'Nanum Gothic', sans-serif;
`;
const Header = styled.header`
  width: 100%;
  height: 2.5rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  color: white;
  background-color: rgb(0, 0, 0);
`;
const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const LeftSection = styled.section`
  width: 15%;
  height: 100%;
  background-color: ${theme.backgroundDarkColor};
`;
const RightSection = styled.section`
  padding: 0 1.5rem;
  width: 85%;
  height: 100%;
  overflow: auto;
  > * {
    margin: 2rem 0;
  }
`;
const PageTitle = styled.h1``;
const FunctionalityContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
function searchApplicant(query: searchQueryType | null) {
  throw new Error('Function not implemented.');
}
