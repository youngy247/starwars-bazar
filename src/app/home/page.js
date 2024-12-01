'use client';

import ErrorBoundaryWrapper from '@/components/ErrorBoundaryWrapper/ErrorBoundaryWrapper';
import { useMobile } from '@/hooks/useMobile';
import { useStarships } from '@/hooks/useStarships';
import {
  Column,
  ComboButton,
  ContainedList,
  ContainedListItem,
  ContentSwitcher,
  ExpandableSearch,
  Grid,
  Loading,
  MenuItem,
  Pagination,
  Switch,
} from '@carbon/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Starship from './Product/StarshipProduct';

export default function BazarPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStarships, setFilteredStarships] = useState([]);

  const { loading, error, starships, totalStarships } =
    useStarships(currentPage);
  const isMobile = useMobile();

  // Handle search term change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter starships based on search term
  useEffect(() => {
    const filteredResults = starships.filter((starship) =>
      starship.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStarships(filteredResults);
  }, [searchTerm, starships]);

  if (loading) {
    return (
      <div className="spinner-container">
        <Loading
          role="status"
          aria-live="assertive"
          className={'spinner'}
          data-testid="spinner"
          withOverlay={false}
        />
      </div>
    );
  }

  if (error) {
    return <div>{`Error! ${error}`}</div>;
  }

  return (
    <div className="bazar-page-container">
      <Grid className="bazar-page-grid">
        <div className="bazar-page-header-container">
          <h1>Starwars Bazar</h1>{' '}
          <Image
            src="/favicon.ico"
            alt="Starwars Bazar Logo"
            width={58}
            height={58}
          />
        </div>
        <Column lg={16} md={8} sm={4}>
          {isMobile ? (
            <ComboButton label="Starships">
              <MenuItem label="People" />
              <MenuItem label="Planets" />
              <MenuItem label="Films" />
              <MenuItem label="Vehicles" />
            </ComboButton>
          ) : (
            <ContentSwitcher onChange={() => {}}>
              <Switch name="one" text="Starships" />
              <Switch name="two" text="People" />
              <Switch name="three" text="Planets" />
              <Switch name="four" text="Films" />
              <Switch name="five" text="Vehicles" />
            </ContentSwitcher>
          )}

          <div className="bazar-page-search-container">
            <ExpandableSearch
              className="search-icon"
              placeholder="Search Starships"
              labelText="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              closeButtonLabelText="Clear search input"
              size="lg"
            />
          </div>

          <ContainedList
            label="Available Starships:"
            size="md"
            className="starship-list">
            {filteredStarships
              .slice(0, currentPageSize)
              .map((starship, index) => (
                <ContainedListItem key={index} className="starship-item">
                  <ErrorBoundaryWrapper>
                    <Starship starship={starship} />
                  </ErrorBoundaryWrapper>
                </ContainedListItem>
              ))}
          </ContainedList>

          <Pagination
            totalItems={totalStarships}
            backwardText="Previous page"
            forwardText="Next page"
            pageSize={currentPageSize}
            pageSizes={[10]}
            itemsPerPageText="Items per page"
            page={currentPage}
            onChange={({ page, pageSize }) => {
              setSearchTerm('');
              setCurrentPage(page);
              if (pageSize !== currentPageSize) {
                setCurrentPageSize(pageSize);
              }
            }}
          />
        </Column>
      </Grid>
    </div>
  );
}
