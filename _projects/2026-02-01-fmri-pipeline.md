---
layout: project
title: fMRI analysis of episodic memory
context: EPFL MIP Lab · Master's thesis and research internship
card_period: 2024–2025
period: November 2024–March 2025; follow-on internship May–July 2025
role: Python analysis workflow, statistical modeling, and interpretation
summary: Implemented univariate and multivariate fMRI analyses to investigate how the hippocampal–entorhinal network represents spatial and temporal context in memory.
excerpt: Implemented a Python fMRI workflow combining GLM, representational similarity analysis, and permutation testing.
evidence_label: Scope
evidence: Thesis analysis of 26 participants, followed by a native-space pipeline extension for 30 subjects.
areas: [Data analysis, Neuroengineering]
area_keys: [data-analysis]
skills: [Scientific Python, Statistical inference, Pipeline optimization]
tools: [Python, GLM, Representational similarity analysis, ROI and searchlight analyses, Permutation testing, Multiple-comparison correction, HPC]
image: /assets/images/projects/fmri-searchlight.jpg
image_class: project-card-image--plot
image_alt: Glass-brain views of a group-level searchlight RSA result for encoding session E1 in the right hippocampus, corrected for family-wise error at p below 0.05.
image_caption: A result from my thesis, Figure 3.13a (26 participants). The marked cluster shows a spatial-distance association in a searchlight RSA, with family-wise error correction at p < 0.05.
order: 4
---

## Research question

How does the brain represent where an event happened and when it occurred? My master's thesis at EPFL's MIP Lab analyzed fMRI data from a virtual-reality memory experiment to investigate spatial and temporal representations in the hippocampus and entorhinal cortex.

## My contribution

- Implemented a Python workflow combining general linear models (GLM) with representational similarity analysis (RSA).
- Analyzed activity at the voxel level and distributed patterns using region-of-interest and searchlight approaches.
- Applied permutation tests and multiple-comparison correction to assess the evidence for spatial and temporal effects.
- Produced visualizations and interpreted the findings in relation to the study's hypotheses and analysis limitations.

The thesis used an existing collaborative study dataset. My role centered on the analysis and interpretation.

## Approach and decisions

GLM and RSA addressed different parts of the question: changes in activity magnitude and changes in distributed activity patterns. I compared pre- and post-viewing measurements and tested models of spatial distance and temporal context.

The final thesis sample contained **26 participants from an initial dataset of 32**, after exclusions for missing or incomplete data and task performance. I used non-parametric testing, including 10,000 permutations in the reported analyses, and distinguished corrected findings from exploratory observations.

## Results and limits

The univariate analyses did not provide strong support for some expected effects, including the proposed anterior–posterior gradient. Searchlight RSA identified region-specific spatial and temporal associations, while the thesis also highlighted statistical-power and interpretation limits.

Some spatial effects could reflect temporal differences, so I treated the findings as evidence to investigate further rather than a definitive account of how memory is encoded. The thesis received a grade of **6.0/6.0**.

## Follow-on research internship

From May to July 2025, I extended this work at MIP Lab in collaboration with the University of Geneva. I transitioned preprocessing from MNI to native space, added subject-specific regions of interest, and integrated behavioral memory data.

For the 30-subject workflow, I reduced memory use through dynamic variable handling and accelerated processing through parallelization and optimized matrix operations. This extension is separate from the 26-participant analysis reported in the thesis.
