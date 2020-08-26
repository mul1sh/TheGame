import { Flex, MetaHeading } from '@metafam/ds';
import React, { useContext, useEffect, useState } from 'react';
import SelectSearch from 'react-select-search/dist/cjs';

import { SetupContext } from '../../contexts/SetupContext';
import { FlexContainer } from '../Container';
import { getSkills, getCategories } from '../../graphql/getSkills';
import styles from './ExampleCard.module.css';

const parseSkills = (allSkills, categories) => {
  let categoriesMap = categories.reduce(function(map, category) {
    map[category] = {
      name: category,
      type: 'group',
      items: [],
    };
    return map;
  }, {});
  for (const skill of allSkills) {
    const item = {
      value: skill.id,
      name: skill.name,
    };
    categoriesMap[skill.category].items.push(item);
  }
  const options = Object.values(categoriesMap);
  console.log({ options });
  return options;
};

export const SetupSkills: React.FC = () => {
  const { skills, setSkills } = useContext(SetupContext);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function getOptions() {
      const allSkills = await getSkills();
      const categories = await getCategories();
      setOptions(parseSkills(allSkills, categories));
    }
    getOptions();
  }, []);

  return (
    <FlexContainer>
      <MetaHeading mb={10}>What are your superpowers?</MetaHeading>

      <Flex height="20rem">
        {options.length && (
          <SelectSearch
            className="select-search select-search--multiple"
            options={options}
            multiple
            search
            placeholder="ADD A SKILL"
          />
        )}
      </Flex>
    </FlexContainer>
  );
};
